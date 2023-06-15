import React from 'react';
import createDataContext from './createDataContext';
import { AuthStateType } from './types';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../utils/localstorageService';
import { HASH_TOKEN } from '../constant';

const initialState: AuthStateType = {
  isloggedIn: false,
  isWalletConnected: null,
  walletAccountInfo: null,
  connectedWalletName: null,
  isMinting: false,
  mintImageUrl: null,
  mintError: null,
  walletConnetLoading: true,
  mintRemaining: null,
  fetchingNoMint: false,
  totalMinted: null,
  totalNumberOfMintRemaining: null,
  darkLordCount: 0,
  darkLordLoading: false,
};
const authReducer: React.Reducer<AuthStateType, any> = (
  state = initialState,
  action
): AuthStateType => {
  switch (action.type) {
    case 'wallet_conected': {
      return {
        ...state,
        walletAccountInfo: action.payload,
        isWalletConnected: true,
        walletConnetLoading: false,
      };
    }
    case 'wallet_disconnected':
      return {
        ...state,
        isWalletConnected: false,
        walletAccountInfo: null,
      };
    case 'connected_wallet_name':
      return {
        ...state,
        connectedWalletName: action.payload,
      };
    case 'minting': {
      return { ...state, isMinting: true, mintImageUrl: null };
    }
    case 'minting_success': {
      let remainingMint = state.totalNumberOfMintRemaining
        ? state.totalNumberOfMintRemaining - 1
        : 0;
      return { ...state, isMinting: false, mintImageUrl: action.payload };
    }
    case 'loading': {
      return { ...state, walletConnetLoading: action.payload };
    }
    case 'darklord_loading': {
      return { ...state, darkLordLoading: action.payload };
    }
    case 'remaining_mint': {
      return {
        ...state,
        mintRemaining: action.payload,
        totalNumberOfMintRemaining: action.payload.totalNumberOfMintRemaining,
      };
    }

    case 'fetch_darklord': {
      return { ...state, darkLordCount: action.payload };
    }

    case 'total_mint': {
      return { ...state, totalMinted: action.payload };
    }
    case 'minting_failure': {
      return {
        ...state,
        isMinting: false,
        mintImageUrl: null,
        mintError: action.payload,
      };
    }
    default:
      return state;
  }
};

const fetchDarkLordMystryBox = (dispatch: any) => async (walletAddres: any) => {
  dispatch({ type: 'darklord_loading', payload: true });
  const darkLordUri = `https://api.aptoswarcade.com/darklord?wallet_address=${walletAddres}`;
  try {
    const response = await fetch(darkLordUri);
    const data = await response.json();
    dispatch({ type: 'darklord_loading', payload: false });
    dispatch({ type: 'fetch_darklord', payload: data?.data?.count });
  } catch (er) {
    dispatch({ type: 'darklord_loading', payload: false });
  }
};

const setLoading = (dispatch: any) => async (isLoading: boolean) => {
  dispatch({ type: 'loading', payload: isLoading });
};

const startMinting =
  (dispatch: any) => async (transactionHash: string, callback: any) => {
    dispatch({ type: 'minting' });
    try {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

      var urlencoded = new URLSearchParams();
      urlencoded.append('txn', transactionHash);

      var requestOptions: any = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow',
      };

      const response = await fetch(
        'https://api.aptoswarcade.com/generate',
        requestOptions
      );
      const mintImage = await response.json();
      console.log(mintImage);
      mintImage?.msg === 'Some error occured!'
        ? callback(null, 'error')
        : callback(mintImage?.urls?.image);

      dispatch({ type: 'minting_success', payload: mintImage?.urls?.image });
    } catch (err) {
      console.log('minting err', err);
      callback(null, err);
      dispatch({ type: 'minting_failure', payload: err });
    }
  };

const fetchTotalMint = (dispatch: any) => async (walletAddress: string) => {
  if (walletAddress) {
    // const totlal_mint_count_uri = `https://fullnode.testnet.aptoslabs.com/v1/accounts/${walletAddress}/resource/0x1::account::Account`;
    const totlal_mint_count_uri = `https://fullnode.testnet.aptoslabs.com/v1/accounts/${HASH_TOKEN}/resource/${HASH_TOKEN}::warkade::MintInfo`;
    try {
      const response = await fetch(totlal_mint_count_uri);
      const data = await response.json();

      dispatch({
        type: 'total_mint',
        payload: data?.data?.last_mint,
      });
    } catch (err) {
      console.log('fetch mint error', err);
    }
  }
};

const fetchRemainingMint =
  (dispatch: any) => async (walletAddress: string, callback?: any) => {
    if (walletAddress) {
      const get_mint_uri = `https://fullnode.testnet.aptoslabs.com/v1/accounts/${walletAddress}/resource/${HASH_TOKEN}::warkade::Player`;
      try {
        const response = await fetch(get_mint_uri);
        const data = await response.json();

        if (data.error_code === 'resource_not_found') {
          dispatch({
            type: 'remaining_mint',
            payload: {
              ...data,
              health: 0,
              totalBalance: 0,
              totalNumberOfMintRemaining: 0,
            },
          });
        } else {
          let totalBalance = +data.data.mints_remaining / 20;

          let health =
            +data.data?.mints_remaining >= 20
              ? 100
              : +data.data?.mints_remaining * 5;

          dispatch({
            type: 'remaining_mint',
            payload: {
              ...data,
              health,
              totalBalance,
              totalNumberOfMintRemaining: +data.data.mints_remaining,
            },
          });
        }
        callback && callback();
      } catch (err) {
        console.log('fetch mint error', err);
      }
    }
  };

const connetAptosWallet =
  (dispatch: any) => async (data: any, callback: any) => {
    setLocalStorageItem('walletInfo', data);
    dispatch({ type: 'wallet_conected', payload: data });
    callback && callback();
  };

const setConnectedWalletName =
  (dispatch: any) => async (walletName: string) => {
    setLocalStorageItem('walletName', walletName);
    dispatch({ type: 'connected_wallet_name', payload: walletName });
  };

const updateWalletState = (dispatch: any) => async (data: any) => {
  dispatch({ type: 'wallet_conected', payload: data });
};

const disconnectAptosWallet = (dispatch: any) => async (data: any) => {
  localStorage.clear();
  dispatch({ type: 'wallet_disconnected' });
};

export const { Context, Provider } = createDataContext(
  authReducer,
  {
    connetAptosWallet,
    disconnectAptosWallet,
    updateWalletState,
    setConnectedWalletName,
    startMinting,
    setLoading,
    fetchRemainingMint,
    fetchTotalMint,
    fetchDarkLordMystryBox,
  },
  initialState
);

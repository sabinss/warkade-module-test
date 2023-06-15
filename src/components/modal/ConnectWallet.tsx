import { CustomModal } from './CustomModal';
import { AiOutlineClose } from 'react-icons/ai';
import { useContext, useEffect, useState } from 'react';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import {
  WalletCore,
  WalletName,
  NetworkName,
} from '@aptos-labs/wallet-adapter-core';
import { MartianWalletName } from '@martianwallet/aptos-wallet-adapter';
import { PetraWalletName } from 'petra-plugin-wallet-adapter';
import { BloctoWalletName } from '@blocto/aptos-wallet-adapter-plugin';
import { Context as AuthContext } from '../../context';
// wallets
import { PetraWallet } from 'petra-plugin-wallet-adapter';
import { BloctoWallet } from '@blocto/aptos-wallet-adapter-plugin';
import { MartianWallet } from '@martianwallet/aptos-wallet-adapter';

interface IConnectWallet {
  showModal: boolean;
  handleClose: () => void;
}

enum AllowededWallets {
  petra = 'Petra',
  blockto = 'Blockto',
  martian = 'Martian',
}

export const ConnectWallet = ({ handleClose, showModal }: IConnectWallet) => {
  const { state, connetAptosWallet, setConnectedWalletName, setLoading } =
    useContext<any>(AuthContext);
  const [selectedWallet, setSelectedWallet] = useState('');

  const aptosWallet = [
    new PetraWallet(),
    new BloctoWallet({
      network: NetworkName.Testnet,
      bloctoAppId: '84503da4-7d0f-4ced-b004-ecd81bfc333b',
    }),
    new MartianWallet(),
  ];

  const { connect, account, disconnect } = useWallet();

  const aptosWalletNetwork = new WalletCore(aptosWallet);

  useEffect(() => {
    if (account) {
      connetAptosWallet(account, () => {
        setLoading(false);
      });
    }
  }, [account]);

  // for blocto wallet
  // const client = new AptosClient('https://fullnode.mainnet.aptoslabs.com/v1');

  useEffect(() => {}, [account]);
  const handleSelectWallet = (walletName: string) => {
    try {
      handleConnectWallet(walletName);
    } catch (e) {}
  };
  const handleConnectWallet = async (walletName: string) => {
    try {
      setLoading(true);
      setConnectedWalletName(walletName);
      let openSelectedWallet: any = '';

      if (AllowededWallets.petra === walletName) {
        openSelectedWallet = PetraWalletName;
      } else if (AllowededWallets.martian === walletName) {
        openSelectedWallet = MartianWalletName;
      } else if (AllowededWallets.blockto === walletName) {
        openSelectedWallet = BloctoWalletName;
      }
      connect(openSelectedWallet);
      // const wallet = new WalletCore(wallets);
      connetAptosWallet(account, () => {
        setLoading(false);
      });
      handleClose();
    } catch (e) {
      console.log(e);
      setLoading(false);
      throw e;
    }
  };

  return (
    <CustomModal show={showModal} handleClose={() => {}}>
      <div className='modal-border connect-wallet-container mint-modal'>
        <div className='connet-wallet-header'>
          <h1 className='text-color connet-wallet-title'>Select a Wallet</h1>
          <div
            onClick={() => {
              handleClose();
              disconnect();
            }}
            className='close'
          >
            <AiOutlineClose
              style={{ color: '#E7D08C', fontWeight: 'bold', fontSize: 20 }}
            />
          </div>
        </div>

        <div className='wallet-list'>
          <div
            className={`wallet-list-item d-flex  justify-content-start  align-items-center ${
              selectedWallet === AllowededWallets.petra
                ? 'wallet-list-item-active'
                : ''
            }`}
            onClick={() => handleSelectWallet(AllowededWallets.petra)}
          >
            <img
              className='wallet-img'
              src={require('../../assets/images/wallet1.png')}
            />
            <span className='text-color wallet-text'>
              {AllowededWallets.petra}
            </span>
          </div>
          <div
            className={`wallet-list-item d-flex  justify-content-start  align-items-center ${
              selectedWallet === AllowededWallets.blockto
                ? 'wallet-list-item-active'
                : ''
            }`}
            onClick={() => handleSelectWallet(AllowededWallets.blockto)}
          >
            <img
              className='wallet-img'
              src={require('../../assets/images/wallet2.png')}
            />
            <span className='text-color wallet-text'>
              {AllowededWallets.blockto}
            </span>
          </div>
          <div
            className={`wallet-list-item d-flex  justify-content-start  align-items-center ${
              selectedWallet === AllowededWallets.martian
                ? 'wallet-list-item-active'
                : ''
            }`}
            onClick={() => handleSelectWallet(AllowededWallets.martian)}
          >
            <img
              className='wallet-img'
              src={require('../../assets/images/wallet3.png')}
            />

            <span className='text-color wallet-text'>
              {AllowededWallets.martian}
            </span>
          </div>
        </div>
        <div
          className='d-flex justify-content-center mt-10'
          style={{ marginTop: 25 }}
        >
          {/* <Button
            name='CONNECT WALLET'
            className={['wr-primary-theme-btn', 'connect-wallet-btn']}
            onClick={() => {
              handleConnectWallet();
              // connect(wallets[1]?.name);
            }}
          /> */}
        </div>
      </div>
    </CustomModal>
  );
};

import React, { useState, useContext, useEffect } from 'react';
import { Header, Footer } from '../components';
import { LandingMain } from '../components/main/landingMain';
import { ConnectWallet } from '../components/modal/ConnectWallet';
import { Context as AuthContext } from '../context/authContext';
// import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { CollectionLoader } from '../components/common/CollectionLoader';

export const Landing = () => {
  const [connectWalletModal, setConnectWalletModal] = useState(false);

  // const {
  //   connect,
  //   account,
  //   network,
  //   connected,
  //   disconnect,
  //   wallet,
  //   wallets,

  //   signAndSubmitTransaction,
  //   signTransaction,
  //   signMessage,
  // } = useWallet();
  const {
    state: { walletAccountInfo, walletConnetLoading },
    connetAptosWallet,
    setLoading,
  } = useContext<any>(AuthContext);

  const updateWalletAccount = () => {
    // connetAptosWallet(account);
  };

  // useEffect(() => {
  //   setLoading(true);
  //   updateWalletAccount();
  // }, [account]);

  return (
    <div id='landing'>
      {!walletConnetLoading && (
        <Header
          handleConnectWallet={() => {
            if (!walletAccountInfo) {
              setConnectWalletModal(true);
            }
          }}
        />
      )}

      <LandingMain />
      <Footer />
      {/* <ConnectWallet
        showModal={connectWalletModal}
        handleClose={() => {
          setConnectWalletModal(false);
        }}
      /> */}
      {/* <DisconnectWallet
        showModal={connectWalletModal}
        connectedWallet={WalletNames.petra}
        handleClose={() => {
          setConnectWalletModal(false);
        }}
      /> */}
    </div>
  );
};

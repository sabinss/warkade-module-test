import React, { useState, useContext, useEffect } from 'react';
import { Header, Footer } from '../components';
import { CollectionMain } from '../components/';
import { ConnectWallet } from '../components/modal/ConnectWallet';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { Context as AuthContext } from '../context';

export const Collections = () => {
  const [showConnectWallet, setShowConnectWallet] = useState(false);
  const { signAndSubmitTransaction, disconnect } = useWallet();
  const {
    state: { isWalletConnected, walletAccountInfo, account },
    disconnectAptosWallet,
  } = useContext<any>(AuthContext);
  const [forceRender, setForceRender] = useState(false);

  const handleForceRender = () => {
    setForceRender(!forceRender);
  };
  useEffect(() => {
    if (account) {
      handleForceRender();
    }
  }, [account]);

  return (
    <div className='Collection'>
      <Header
        handleConnectWallet={() => {
          if (!walletAccountInfo) {
            setShowConnectWallet(true);
          }
        }}
      />
      <CollectionMain />
      <ConnectWallet
        showModal={showConnectWallet}
        handleClose={() => setShowConnectWallet(false)}
      />
      <Footer />
    </div>
  );
};

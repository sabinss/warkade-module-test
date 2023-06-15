import React, { useState, useEffect, useContext } from 'react';
import { Header, Footer } from '../components';
import { CollectionMain } from '../components/';
import { ConnectWallet } from '../components/modal/ConnectWallet';
import { CollectionLoader } from '../components/common/CollectionLoader';
import { MystryMain } from '../components/main/MystryMain';
import { Context as AuthContext } from '../context';

export const Mystry = () => {
  const {
    state: { darkLordCount, walletAccountInfo },
    fetchDarkLordMystryBox,
  } = useContext<any>(AuthContext);

  useEffect(() => {
    fetchDarkLordMystryBox(walletAccountInfo?.address);
  }, [walletAccountInfo?.address]);

  const [showConnectWallet, setShowConnectWallet] = useState(false);
  return (
    <div className='Collection'>
      <Header
        handleConnectWallet={() => {
          setShowConnectWallet(true);
        }}
      />
      <MystryMain count={darkLordCount} />

      <Footer />
    </div>
  );
};

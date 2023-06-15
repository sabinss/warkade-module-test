import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context';

const withRefreshEffect = (WrappedComponent: any) => {
  return (props: any) => {
    const { updateWalletState } = useContext<any>(AuthContext);

    const initializeWalletInfo = () => {
      const walletInfo = localStorage.getItem('walletInfo');
      updateWalletState(walletInfo);
    };

    useEffect(() => {
      initializeWalletInfo();
    }, [updateWalletState]); // Include updateWalletState in the dependency array

    return <WrappedComponent {...props} />;
  };
};

export default withRefreshEffect;

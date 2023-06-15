import React, { useContext, useEffect, useState } from 'react';
import { getLocalStorageItem } from '../utils/localstorageService';
import { Context as AuthContext } from '../context';

export const AppInit = ({ children }: any) => {
  const [appInitialize, setAppInitialize] = useState(false);

  const {
    state,
    connetAptosWallet,
    setLoading,
    fetchRemainingMint,
    fetchTotalMint,
  } = useContext<any>(AuthContext);

  useEffect(() => {
    setLoading(true);
    const walletInfo = getLocalStorageItem('walletInfo');

    if (walletInfo?.address) {
      connetAptosWallet(walletInfo, () => {
        fetchRemainingMint(walletInfo?.address);
        fetchTotalMint(walletInfo?.address);
      });
    }
    setLoading(false);
  }, [state?.walletAccountInfo?.address]);
  return <div>{children}</div>;
};

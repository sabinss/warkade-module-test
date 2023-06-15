import { CustomModal } from './CustomModal';
import { AiOutlineClose } from 'react-icons/ai';
import { Button } from '../UI/Button';
import { WalletNames } from '../../enums';
import { Context as AuthContext } from '../../context';
import { useContext } from 'react';
import { getLocalStorageItem } from '../../utils/localstorageService';
import { useWallet } from '@aptos-labs/wallet-adapter-react';

interface IDisconnectWallet {
  showModal: boolean;
  handleClose: () => void;
  connectedWallet: string;
  handleDisconnet: () => void;
}

export const DisconnectWallet = ({
  handleClose,
  showModal,
  connectedWallet,
  handleDisconnet,
}: IDisconnectWallet) => {
  const {
    state: { connectedWalletName },
    disconnectAptosWallet,
  } = useContext<any>(AuthContext);

  const walletName = getLocalStorageItem('walletName');
  const { disconnect } = useWallet();

  const showWalletImage = () => {
    if (walletName.toLowerCase() === 'petra') {
      return (
        <img
          className='wallet-img'
          src={require('../../assets/images/wallet1.png')}
        />
      );
    } else if (walletName.toLowerCase() === 'martian') {
      return (
        <img
          className='wallet-img'
          src={require('../../assets/images/wallet3.png')}
        />
      );
    } else if (walletName.toLowerCase() === 'blockto') {
      return (
        <img
          className='wallet-img'
          src={require('../../assets/images/wallet2.png')}
        />
      );
    }
  };
  return (
    <CustomModal show={showModal} handleClose={() => {}}>
      <div
        className='mint-modal modal-border disconnect-wallet'
        style={{ width: '60%' }}
      >
        <div className='disconnet-wallet-header d-flex justify-content-between'>
          <h1 className='text-color default-font-size '>Disconnect Wallet</h1>
          <div onClick={handleClose} className='close'>
            <AiOutlineClose
              style={{ color: '#E7D08C', fontWeight: 'bold', fontSize: 20 }}
            />
          </div>
        </div>

        <div className='disconnet-wallet-body d-flex justify-content-between align-items-center'>
          <div className='wallet-list-item d-flex  justify-content-start  align-items-center wallet-list-item-active'>
            {walletName && showWalletImage()}
            <span className='text-color wallet-text'>{connectedWallet}</span>
          </div>
          <Button
            name='DISCONNECT'
            textStyle={{ fontSize: 9 }}
            className={['wr-primary-theme-btn', 'disconnet-wallet-btn']}
            onClick={() => {
              disconnect();
              handleDisconnet();
              disconnectAptosWallet();
            }}
          />
        </div>
        <p className='text-color' style={{ fontSize: 10, marginTop: 10 }}>
          Note:Disconnect Current Wallet to Connect Another Wallet
        </p>
      </div>
    </CustomModal>
  );
};

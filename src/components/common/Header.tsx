import React, { useContext, useState, useEffect } from 'react';
// import HeaderLogo from '../../assets/svg/Logo.svg';
import HeaderLogo from '../../assets/images/NewHeader.png';
import { Button } from '../UI/Button';
import { Link } from 'react-router-dom';
import { Context as AuthContext } from '../../context';
import { truncateStringInBetween } from '../../utils/stringHelper';
import { DisconnectWallet } from '../modal/DisconnectWallet';
import { CustomModal } from '../modal/CustomModal';
import { AiOutlineClose } from 'react-icons/ai';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { HASH_TOKEN } from '../../constant';
import { toast } from 'react-toastify';
interface IHeader {
  handleConnectWallet: () => void;
}

export const Header = ({ handleConnectWallet }: IHeader) => {
  const [openDisconnetWallet, setDisconnectWallet] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const {
    state: {
      isWalletConnected,
      walletAccountInfo,
      mintRemaining,
      walletConnetLoading: loading,
    },
    disconnectAptosWallet,
    fetchRemainingMint,
    setLoading,
  } = useContext<any>(AuthContext);
  const [balanceModal, setBalanceModal] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [depositedAmount, setDepositedAmount] = useState<null | number>(null);

  const { signAndSubmitTransaction, disconnect } = useWallet();

  const handleConnecting = () => {
    setConnecting(true);
  };

  useEffect(() => {
    fetchRemainingMint(walletAccountInfo?.address);

    setConnecting(false);
  }, [walletAccountInfo, isWalletConnected]);

  const handleDeposit = async () => {
    const deposit_payload = {
      type: 'entry_function_payload',
      function: `${HASH_TOKEN}::warkade::deposit`,
      type_arguments: [],
      arguments: [depositedAmount],
    };
    try {
      await signAndSubmitTransaction(deposit_payload);
      // setBalanceModal(false);
      fetchRemainingMint(walletAccountInfo?.address, () => {
        setBalanceModal(false);
      });
      toast.success('Amount has been deposited successfully.');
    } catch (error) {
      toast.error('Deposit failed. Please try again!.');
    }
  };

  const setDepositAmount = (depositAmount: any) => {
    setDepositedAmount(() => Math.pow(10, 8) * +depositAmount);
  };

  const displayWalletAddress = () => {
    return (
      walletAccountInfo?.address.slice(0, 4) +
      '....' +
      walletAccountInfo?.address.slice(-4)
    );
  };

  return (
    <header>
      <div className='container-fluid'>
        <div className='row '>
          <div className='col-lg-4 col-sm-6 col-12'>
            <div className='header_logo px-5 w-lg-75 mb-2'>
              <Link to={'/'}>
                <img src={HeaderLogo} alt='HeaderLogo' />
              </Link>
            </div>
          </div>
          <div className='col-lg-8 col-sm-6 col-12'>
            <div className='head-right float-lg-end  float-sm-none px-lg--5 d-flex'>
              {isWalletConnected && walletAccountInfo && (
                <Button
                  name={mintRemaining?.totalBalance || '00.00'}
                  onClick={() => {
                    setBalanceModal(true);
                    // disconnectAptosWallet();
                  }}
                  className={[
                    'wr-primary-theme-btn wr-primary-theme-btn_header apt-btn  mx-2  px-3',
                  ]}
                />
              )}
              {isWalletConnected && walletAccountInfo ? (
                <Button
                  onClick={() => {
                    handleConnectWallet();
                    setDisconnectWallet(true);
                    // disconnectAptosWallet();
                  }}
                  name={
                    walletAccountInfo && displayWalletAddress()
                    // truncateStringInBetween(walletAccountInfo?.address, 20)
                  }
                  className={[
                    'wr-primary-theme-btn wr-primary-theme-btn_header  px-3',
                  ]}
                />
              ) : (
                // ${
                //   connecting && 'button-animation '
                // }
                <Button
                  onClick={() => {
                    handleConnecting();
                    handleConnectWallet();
                  }}
                  name={`${loading ? 'loading...' : 'connect wallet'}`}
                  className={[
                    `wr-primary-theme-btn wr-primary-theme-btn_header  px-3`,
                  ]}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <DisconnectWallet
        handleClose={() => setDisconnectWallet(false)}
        showModal={openDisconnetWallet}
        connectedWallet={'Petra'}
        handleDisconnet={() => {
          try {
            disconnect();
            setDisconnectWallet(false);
            disconnectAptosWallet();
          } catch (e) {
            console.log('diconnect wallet', e);
          }
        }}
      />
      {/* // balanceModal */}
      {balanceModal && (
        <CustomModal
          show={true}
          handleClose={() => {
            setBalanceModal(false);
          }}
        >
          <div className='deposit-modal'>
            <div className='modal-header'>
              <h4 className='mb-3 text-center'>Deposit Now</h4>
              <div
                onClick={() => {
                  setBalanceModal(false);
                }}
                className='close'
              >
                <AiOutlineClose
                  style={{ color: '#E7D08C', fontWeight: 'bold', fontSize: 20 }}
                />
              </div>
            </div>
            <div className='modal-body'>
              <form action=''>
                <div className='row w-100'>
                  <div className='col-md-4 col-lg-4 col-sm-6 col-6'>
                    <div className='form-grp depo_selector'>
                      <input
                        type='radio'
                        name='amnt'
                        value='0.1'
                        onClick={() => setDepositAmount('0.1')}
                        className='hidden-check'
                      />
                      <label htmlFor='0.1' className='apt-btn large'>
                        0.1
                      </label>
                    </div>
                  </div>
                  <div className='col-md-4 col-lg-4 col-sm-6 col-6'>
                    <div className='form-grp depo_selector'>
                      <input
                        type='radio'
                        name='amnt'
                        value='0.2'
                        onClick={() => setDepositAmount('0.2')}
                        className='hidden-check'
                      />
                      <label htmlFor='0.2' className='apt-btn large'>
                        0.2
                      </label>
                    </div>
                  </div>
                  <div className='col-md-4 col-lg-4 col-sm-6 col-6'>
                    <div className='form-grp depo_selector'>
                      <input
                        type='radio'
                        name='amnt'
                        value='0.3'
                        onClick={() => setDepositAmount('0.3')}
                        className='hidden-check'
                      />
                      <label htmlFor='0.3' className='apt-btn large'>
                        0.3
                      </label>
                    </div>
                  </div>
                  <div className='col-md-4 col-lg-4 col-sm-6 col-6'>
                    <div className='form-grp depo_selector'>
                      <input
                        type='radio'
                        name='amnt'
                        value='0.5'
                        onClick={() => setDepositAmount('0.5')}
                        className='hidden-check'
                      />
                      <label htmlFor='0.5' className='apt-btn large'>
                        0.5
                      </label>
                    </div>
                  </div>
                  <div className='col-md-4 col-lg-4 col-sm-6 col-6'>
                    <div className='form-grp depo_selector'>
                      <input
                        type='radio'
                        name='amnt'
                        value='0.7'
                        onClick={() => setDepositAmount('0.7')}
                        className='hidden-check'
                      />
                      <label htmlFor='0.7' className='apt-btn large'>
                        0.7
                      </label>
                    </div>
                  </div>
                  <div className='col-md-4 col-lg-4 col-sm-6 col-6'>
                    <div className='form-grp depo_selector'>
                      <input
                        type='radio'
                        name='amnt'
                        value='1.0'
                        onClick={() => setDepositAmount('1.0')}
                        className='hidden-check'
                      />
                      <label htmlFor='1.0' className='apt-btn large'>
                        1.0
                      </label>
                    </div>
                  </div>
                </div>
              </form>
              <Button
                name='Deposit now'
                onClick={() => {
                  handleDeposit();
                }}
                className={[
                  'wr-primary-theme-btn my-5 mx-auto d-block px-3  text-uppercase',
                ]}
              />
            </div>
          </div>
        </CustomModal>
      )}
    </header>
  );
};

// reference
// https://github.com/aptos-labs/aptos-wallet-adapter/blob/main/packages/wallet-adapter-react/src/WalletProvider.tsx
// https://github.com/aptos-labs/aptos-wallet-adapter/tree/main/packages/wallet-adapter-react#examples
// https://aptos.dev/integration/wallet-adapter-for-dapp

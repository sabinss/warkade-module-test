import React, { useContext, useEffect, useState } from 'react';
import { Button } from '../UI/Button';

import { MintModal } from '../modal/MintModal';

import { CustomModal } from '../index';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { Context as AuthContext } from '../../context/authContext';
import { ConnectWallet } from '../modal/ConnectWallet';
import { CollectionLoader } from '../common/CollectionLoader';
// import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { ReactComponent as HeartNil } from '../../assets/images/lifelinesvg/0.svg';
import { ReactComponent as HeartLow } from '../../assets/images/lifelinesvg/one.svg';
import { ReactComponent as HeartMedium } from '../../assets/images/lifelinesvg/2.svg';
import { ReactComponent as HeartHalf } from '../../assets/images/lifelinesvg/3.svg';

import { ReactComponent as HeartFull } from '../../assets/images/lifelinesvg/4.svg';
import { toast } from 'react-toastify';
import { HASH_TOKEN } from '../../constant';

export const LandingMain = () => {
  const {
    state: {
      isWalletConnected,
      walletAccountInfo,
      mintRemaining,
      totalMinted,
      totalNumberOfMintRemaining,
    },
    fetchTotalMint,
    fetchRemainingMint,
  } = useContext<any>(AuthContext);
  const [mintModal, setMintModal] = useState(false);
  const [openConnectWallet, setConnectWallet] = useState(false);
  const [balanceModal, setBalanceModal] = useState(false);
  const [depositedAmount, setDepositedAmount] = useState<null | number>(null);

  const handleMint = () => {
    setMintModal(true);
  };

  // const { signAndSubmitTransaction } = useWallet();
  useEffect(() => {}, [walletAccountInfo?.address, totalMinted]);

  const handleDeposit = async () => {
    const deposit_payload = {
      type: 'entry_function_payload',

      function: `${HASH_TOKEN}::warkade::deposit`,
      type_arguments: [],
      arguments: [depositedAmount],
    };

    try {
      // await signAndSubmitTransaction(deposit_payload);
      fetchTotalMint(walletAccountInfo?.address);
      fetchRemainingMint(walletAccountInfo?.address, () => {
        setBalanceModal(false);
      });
      toast.success('Amount has been deposited successfully.');
    } catch (error: any) {
      toast.error(error?.message ?? 'Deposit failed. Please try again!.');
    }
  };

  const setDepositAmount = (depositAmount: any) => {
    setDepositedAmount(() => Math.pow(10, 8) * +depositAmount);
  };

  const displayHeartImageBasedOnHealth = () => {
    const healthValue = mintRemaining?.health;
    console.log('healthValue', healthValue, typeof healthValue);
    let imageDisplay = null;
    if (healthValue === 0) {
      return (
        <div className='lifeline_heart nil-heart'>
          <HeartNil />
        </div>
      );
    } else if (healthValue >= 1 && healthValue <= 30) {
      return (
        <div className='lifeline_heart low-heart'>
          <HeartLow />
        </div>
      );
    } else if (healthValue >= 31 && healthValue <= 70) {
      return (
        <div className='lifeline_heart medium-heart'>
          <HeartMedium />
        </div>
      );
    } else if (healthValue >= 71 && healthValue <= 99) {
      return (
        <div className='lifeline_heart medium-heart'>
          <HeartHalf />
        </div>
      );
    } else if (healthValue >= 100) {
      return (
        <div className='lifeline_heart full-heart'>
          <HeartFull />
        </div>
      );
    }
  };

  return (
    <main>
      <section className='index-home-section'>
        <div className='banner-content'>
          <div className='custom-container'>
            <div className='text-content'>
              <div className='banner-title'>
                <h1>Mint to defeat</h1>
                <h1>
                  <span>The Darklord</span>
                </h1>
              </div>
            </div>
          </div>
          <div className='banner-bottom '>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-9 position-relative'>
                  <div className='bottom-content'>
                    <div className='bottom-title text-center'>
                      <h6>Aptos Warcades</h6>
                    </div>
                    <div className='d-flex banner-image-sprite'>
                      <div className='single-image-holder'>
                        <img
                          src={require('../../assets/images/man1.jpeg')}
                          alt=''
                        />
                      </div>
                      <div className='single-image-holder'>
                        <img
                          src={require('../../assets/images/man2.jpeg')}
                          alt=''
                        />
                      </div>
                      <div className='single-image-holder'>
                        <img
                          src={require('../../assets/images/man3.jpeg')}
                          alt=''
                        />
                      </div>
                      <div className='single-image-holder'>
                        <img
                          src={require('../../assets/images/man4.jpeg')}
                          alt=''
                        />
                      </div>
                      <div className='single-image-holder'>
                        <img
                          src={require('../../assets/images/man5.jpeg')}
                          alt=''
                        />
                      </div>
                      <div className='single-image-holder'>
                        <img
                          src={require('../../assets/images/man6.jpeg')}
                          alt=''
                        />
                      </div>
                      <div className='single-image-holder'>
                        <img
                          src={require('../../assets/images/man7.jpeg')}
                          alt=''
                        />
                      </div>
                      <div className='single-image-holder'>
                        <img
                          src={require('../../assets/images/man8.jpeg')}
                          alt=''
                        />
                      </div>
                      <div className='single-image-holder'>
                        <img
                          src={require('../../assets/images/man9.jpeg')}
                          alt=''
                        />
                      </div>
                      <div className='single-image-holder'>
                        <img
                          src={require('../../assets/images/man10.jpeg')}
                          alt=''
                        />
                      </div>
                    </div>
                  </div>
                  <div className='below-bottom-content d-lg-flex align-align-items-start'>
                    <div className='bottom-left  d-inline-block'>
                      <Link to={'/collections'}>
                        <div className='icon-grp-text'>
                          <ul className='list-unstyled d-flex icon-grp'>
                            <li>
                              <div className='icon-holder'>
                                <img
                                  src={require('../../assets/images/WarcadiaCoinAnimation.gif')}
                                  alt=''
                                />
                              </div>
                            </li>
                            <li>
                              <div className='icon-holder'>
                                <img
                                  src={require('../../assets/images/WarcadiaCoinAnimation.gif')}
                                  alt=''
                                />
                              </div>
                            </li>
                            <li>
                              <div className='icon-holder'>
                                <img
                                  src={require('../../assets/images/WarcadiaCoinAnimation.gif')}
                                  alt=''
                                />
                              </div>
                            </li>
                          </ul>
                          <h6>My Collection</h6>
                        </div>
                      </Link>
                    </div>

                    <div className='bottom-line-grp  d-inline-block'>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3'>
                  <div className='bottom-right'>
                    <div className='img-btn-wrap'>
                      <div className='image-holder fire-back'>
                        <img
                          src={require('../../assets/images/DarkLordAnimation.gif')}
                          alt=''
                        />
                      </div>
                      <div className='btn-wrap d-flex'>
                        <Button
                          name='Mint'
                          className={['wr-primary-theme-btn']}
                          onClick={() => {
                            // if (+mintRemaining?.totalBalance < 0) {
                            // } else {
                            //   setBalanceModal(true);
                            // }
                            if (!walletAccountInfo) {
                              setConnectWallet(true);
                            } else if (
                              walletAccountInfo &&
                              +mintRemaining?.totalBalance > 0
                            ) {
                              setMintModal(true);
                            } else if (
                              walletAccountInfo &&
                              +mintRemaining?.totalBalance <= 0
                            ) {
                              setBalanceModal(true);
                            }
                          }}
                        />
                      </div>
                    </div>
                    {isWalletConnected && walletAccountInfo && (
                      <div className='img-flamesword'>
                        {displayHeartImageBasedOnHealth()}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='total-mint-detail '>
            {isWalletConnected && walletAccountInfo && (
              <ul className='list-unstyled'>
                <li>
                  <strong>Health : </strong>
                  <span>
                    {mintRemaining?.health ? mintRemaining?.health : 0}
                  </span>
                </li>
                <li>
                  <strong>Total warcades minted : </strong>
                  <span>{totalMinted}</span>
                </li>
              </ul>
            )}
          </div>
          <div className='brick-imgt '>
            <div className='brick-icon-wrap'>
              <div className='brick-icon'>
                <img
                  src={require('../../assets/images/Rectangle37.png')}
                  alt=''
                />
              </div>
              <div className='brick-icon'>
                <img
                  src={require('../../assets/images/Rectangle37.png')}
                  alt=''
                />
              </div>
              <div className='brick-icon'>
                <img
                  src={require('../../assets/images/Rectangle37.png')}
                  alt=''
                />
              </div>
            </div>
            <div className='brick-flame-wrap'>
              <div className='img-flame-wrap'>
                <div className='sword-wrap'>
                  <img
                    src={require('../../assets/images/Burning-Sword.gif')}
                    alt=''
                  />
                </div>
              </div>
              <div className='brick-left'>
                <div className='brick-icon-wrap'>
                  <div className='brick-icon'>
                    <img
                      src={require('../../assets/images/Rectangle37.png')}
                      alt=''
                    />
                  </div>
                  <div className='brick-icon'>
                    <img
                      src={require('../../assets/images/Rectangle37.png')}
                      alt=''
                    />
                  </div>
                </div>
                <div className='brick-icon-wrap'>
                  <div className='brick-icon'>
                    <img
                      src={require('../../assets/images/Rectangle37.png')}
                      alt=''
                    />
                  </div>
                  <div className='brick-icon'>
                    <img
                      src={require('../../assets/images/Rectangle37.png')}
                      alt=''
                    />
                  </div>
                </div>
                <div className='brick-icon-wrap'>
                  <div className='brick-icon'>
                    <img
                      src={require('../../assets/images/Rectangle37.png')}
                      alt=''
                    />
                  </div>
                  <div className='brick-icon'>
                    <img
                      src={require('../../assets/images/Rectangle37.png')}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MintModal
        showModal={mintModal}
        handleMint={() => {
          handleMint();
        }}
        handleClose={() => setMintModal(false)}
      />
      <ConnectWallet
        showModal={openConnectWallet}
        handleClose={() => {
          setConnectWallet(false);
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
    </main>
  );
};

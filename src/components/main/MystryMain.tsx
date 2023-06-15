import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context as AuthContext } from '../../context';
import { ConnectWallet } from '../modal/ConnectWallet';
import { CollectionLoader } from '../common/CollectionLoader';

export const MystryMain = ({ count }: { count: number }) => {
  const [connectWalletModal, setConnectWalletModal] = useState(false);

  const {
    state: { walletAccountInfo, darkLordLoading },
  } = useContext<any>(AuthContext);

  const DisconnectedView = () => {
    if (!walletAccountInfo) {
      return (
        <div className='col-lg-12'>
          <div className='disconneted-frame d-flex align-items-center justify-content-center'>
            <p>Please Connect Your Wallet to View Your Mystry Box</p>
            <div className='btn-wrap w-100 py-3'>
              <button
                className='wr-primary-theme-btn mx-auto d-block'
                onClick={() => {
                  setConnectWalletModal(true);
                }}
              >
                Connect wallet
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='col-lg-12'>
          <div className='disconneted-frame d-flex align-items-center justify-content-center'>
            <p className='text-center'>
              {' '}
              You have not minted any dark lord yet. Mystery box will be
              available only if you minted dark lords.
            </p>
          </div>
        </div>
      );
    }
  };

  const MintingImageLoading = () => {
    return (
      <>
        {Array.from(Array(6)).map((x, index) => {
          return (
            <div className='col-md-4 py-3' key={index}>
              <CollectionLoader />
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className='position-relative'>
      <div className='container-fluid custom-container'>
        <div className='row d-flex align-items-end'>
          <div className='col-lg-4'>
            <div className='brick-imgt collection-pg'>
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
                <div className='img-flame-wrap'>
                  <div className='sword-wrap'>
                    <img
                      src={require('../../assets/images/Burning-Sword.gif')}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='side-bottom'>
              <div className='bottom-image-wrap'>
                <div className='img-wrap'>
                  <img
                    src={require('../../assets/images/image11.png')}
                    alt=''
                  />
                </div>
                <div className='bottom-line-grp  d-inline-block'>
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
          </div>
          <div className='col-lg-8'>
            <div className='icon-grp-text icon-grp-text_reversed'>
              <div className='tab-link-wrap'>
                <ul>
                  <li>
                    <Link to='/collections'> My Collection</Link>
                  </li>
                  <li className='selected'>
                    <Link to='/mysterybox'> Mystery Box({count})</Link>
                  </li>
                </ul>
              </div>
            </div>
            <ConnectWallet
              showModal={connectWalletModal}
              handleClose={() => setConnectWalletModal(false)}
            />
            <div className='collection-frame hide-scrollbar'>
              <div className='row h-100 '>
                {darkLordLoading ? (
                  <MintingImageLoading />
                ) : walletAccountInfo && count > 0 ? (
                  Array(count)
                    .fill(0)
                    .map((x) => {
                      return (
                        <div className='col-md-4 py-2'>
                          <div className='collection-card'>
                            <img
                              src={require('../../assets/images/artboard-mystry.png')}
                              alt=''
                            />
                          </div>
                        </div>
                      );
                    })
                ) : (
                  <DisconnectedView />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

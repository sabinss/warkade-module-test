import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { startFetchMyQuery } from './fetchCollectionData';
import { Context as AuthContext } from '../../context';
import { ConnectWallet } from '../modal/ConnectWallet';
import ErrorBoundary from '../Errorboundary';
import { CollectionLoader } from '../common/CollectionLoader';

export const CollectionMain = () => {
  const [isWalletConnected, setWalletConnected] = useState(false);
  const { state } = useContext<any>(AuthContext);
  const [mintImages, setMintImages] = useState<any[]>([]);
  const [fetchingMintImages, setFetchingMintImages] = useState(true);
  const [connectWalletModal, setConnectWalletModal] = useState(false);
  const [mintingImageLoading, setMintingImageLoading] = useState(false);
  const [imageExists, setImageExists] = useState(true);

  useEffect(() => {
    setMintingImageLoading(true);
    if (!state.walletAccountInfo) {
      setMintingImageLoading(false);
    }
    if (state.walletAccountInfo) {
      startFetchMyQuery(state, (data) => {
        if (data) {
          setFetchingMintImages(false);
          setMintImages(data);
          checkImageExistence(data);
        } else {
          setFetchingMintImages(false);
        }
        setMintingImageLoading(false);
      });
    } else {
      setMintImages([]);
    }
  }, [state.walletAccountInfo]);

  const checkImageExistence = async (images: any) => {
    try {
      setMintingImageLoading(true);
      const promises = images.map((x: any) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(x);
          img.onerror = () => resolve(null);
          img.src = x.image;
        });
      });
      const results = await Promise.all(promises);
      const filteredUrls = results.filter((url) => url !== null);
      setMintImages(filteredUrls);
      setMintingImageLoading(false);
    } catch (error) {
      setMintingImageLoading(false);
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

  const ConnectedView = () => {
    return (
      <>
        {mintImages.map((mintImage: any, index: number) => {
          setImageExists(() => true);
          const handleImageError = (
            event: React.SyntheticEvent<HTMLImageElement>
          ) => {
            event.currentTarget.style.display = 'none';
            setImageExists(() => false); // Hide the image on error
          };
          return (
            <div className='col-md-4 py-3'>
              <div
                className='collection-card'
                style={{ borderRadius: 10, height: 200 }}
              >
                <div
                  className='card-img'
                  style={{ width: '90%', height: '90%' }}
                >
                  {imageExists ? (
                    <img
                      src={mintImage.image}
                      alt=''
                      onError={handleImageError}
                    />
                  ) : (
                    <p>No image found</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  const DisconnectedView = () => {
    return (
      <div className='col-lg-12'>
        <div className='disconneted-frame d-flex align-items-center justify-content-center'>
          <p>Please Connect Your Wallet to View Your Collection</p>
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
            <div className='tab-link-wrap'>
              <ul>
                <li className='selected'>
                  <Link to='/collections'>
                    {' '}
                    My Collection({mintImages.length})
                  </Link>
                </li>
                <li>
                  <Link to='/mysterybox'> Mystery Box</Link>
                </li>
              </ul>
            </div>

            <div
              className={`collection-frame ${
                mintImages.length <= 6 ? 'hide-scrollbar' : 'show-scrollbar'
              }`}
            >
              <div className='row h-100 '>
                {mintingImageLoading ? (
                  <MintingImageLoading />
                ) : state.isWalletConnected && state.walletAccountInfo ? (
                  <ErrorBoundary>
                    <ConnectedView />
                  </ErrorBoundary>
                ) : (
                  <DisconnectedView />
                )}
              </div>
            </div>
          </div>
          <ConnectWallet
            showModal={connectWalletModal}
            handleClose={() => {
              setConnectWalletModal(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

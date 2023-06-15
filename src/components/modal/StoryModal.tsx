import React from 'react';
import { CustomModal } from './CustomModal';
import { AiOutlineClose } from 'react-icons/ai';

interface IStoryModal {
  showModal: boolean;
  handleClose: () => void;
}

export const StoryModal = ({ showModal, handleClose }: IStoryModal) => {
  return (
    <CustomModal
      show={showModal}
      handleClose={() => {
      }}
    >
      <div className='mint-modal story-modal'>
        <div className='story-modal-header d-flex justify-content-between'>
          <div className='d-flex justify-content-center align-items-center'>
            <h1 className='text-color story-modal-title'>Story</h1>
            <img
              src={require('../../assets/images/volkan-sozbir-swordtrans 1.png')}
              alt=''
            />
          </div>
          <div
            className='col-lg-1 mint-modal-header-icon'
            onClick={() => handleClose()}
          >
            <AiOutlineClose
              style={{ color: '#E7D08C', fontWeight: 'bold', fontSize: 20 }}
            />
          </div>
        </div>
        <div className='story-content'>
          <div className="story-content-text">
              <p className='text-color story-content-p'>
              Season 1 - Mint Aptos Warcades to defeat the Dark Lord and Win Mystery Boxes.
                </p> 
                <p className='text-color story-content-p'>A Dark
                A Dark Lord has intruded the Aptos Kingdom threatening to destroy the prosperous and thriving kingdom and bring an end to the Aptonian civilization.</p>
                <p className='text-color story-content-p'> APTON, the great and almighty King has ordered Aptos Warcades to destroy the Dark Lord before he spreads his evil and brings chaos.</p> 
                <p className='text-color story-content-p'>As loyal civilians of the Aptos Kingdom, it is upon us Aptonians to defeat the Dark Lord and help keep the land flourish.</p>
                <p className='text-color story-content-p'>
                It will not be easy to defeat the Dark Lord, but if we all rally together, nothing is impossible.</p>
                <p className='text-color story-content-p'> How can the Dark Lord be defeated?</p>
                <p className='text-color story-content-p'>  By minting as many Aptos Warcades as possible.</p>
                <p className='text-color story-content-p'> The Dark Lord has many faces. Aptos Civilians can mint Warcades or Dark Lord. Whoever mints the Dark Lord kills it.</p> 
                <p className='text-color story-content-p'>If you mint the dark lord, you get a mystery box. 50 Popular Aptos NFTs will be raffled among the wallet addresses that mint Dark Lord at the end of Season 1. The more Dark Lord you mint, the more chances of winning Blue Chip Aptos NFTs at the end of Season 1.</p>
            </div>
            <div className="story-side-img">
              <img
                className='story-content-img'
                src={require('../../assets/images/image22.png')}
                alt=''
              />
            </div>
        
        </div>
      </div>
    </CustomModal>
  );
};

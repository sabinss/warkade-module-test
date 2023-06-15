import React from 'react';
import { CustomModal } from './CustomModal';
import { AiOutlineClose } from 'react-icons/ai';

interface IFaqModal {
  showModal: boolean;
  handleClose: () => void;
}

export const FaqModal = ({ showModal, handleClose }: IFaqModal) => {
  return (
    <CustomModal show={showModal} handleClose={() => {}}>
      <div className='mint-modal faq-modal'>
        <div className='mint-modal-header'>
          <div className='col-lg-11'>
            <h3 className='min-modal-header-title'>? FAQs</h3>
          </div>
          <div
            className='col-lg-1 mint-modal-header-icon close'
            onClick={handleClose}
          >
            <AiOutlineClose
              style={{ color: '#E7D08C', fontWeight: 'bold', fontSize: 20 }}
            />
          </div>
        </div>
        <div className='mint-modal-body my-3'>
          <div className='mint-modal-body-card-wrapper'>
            <div className='faq-card text-start'>
              <ol>
                <li>
                  <span>Are there any utilities for NFTs?</span>
                  <p>
                    There are no utilities for NFTs. The project is just for
                    fun.
                  </p>
                </li>
                <li>
                  <span>Will there be a Season 2?</span>
                  <p>There will be a season 2.</p>
                </li>
                <li>
                  {' '}
                  <span>Can the NFTs be traded in the secondary market?</span>
                  <p>Yes, you can trade the NFTs in the secondary market.</p>
                </li>
                <li>
                  <span>Is there rarity for NFTs?</span>
                  <p>There is no rarity for NFTs.</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

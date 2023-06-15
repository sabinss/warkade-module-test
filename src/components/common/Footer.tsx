import React, { useState } from 'react';
import { StoryModal } from '../modal/StoryModal';
import { FaqModal } from '../modal/FaqModal';
import { PrivacyPolicyModal } from '../modal/PrivacyPolicyModal';
import { TermsConditionModal } from '../modal/TermsConditionModal';

export const Footer = () => {
  const [showStoryModal, setShowStoryModal] = useState(false);
  const [showFaqModal, setShowFaqModal] = useState(false);
  const [showPrivacyModal, setPrivacyModal] = useState(false);
  const [showsTermsModal, setTermsMmodal] = useState(false);
  return (
    <footer>
      <div className='containter-fluid px-lg-5 px-sm-2'>
        <div className='footer-content'>
          <div className='row align-items-center'>
            <div className='col-lg-3 col-12'>
              <div className='footer-content-wrap footer-left'>
                <a href=''>© APTOS WARCADE</a>
              </div>
            </div>
            <div className='col-lg-4 col-12'>
              <div className='footer-content-wrap footer-mid'>
                <ul className='list-unstyled d-flex'>
                  <li onClick={() => setShowStoryModal(true)}>
                    <p style={{ color: '#E7D08C', fontSize: 12 }}>Story</p>
                  </li>
                  <li onClick={() => setShowFaqModal(true)}>
                    <p>FAQs</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-5 col-12'>
              <div className='footer-content-wrap footer-right'>
                <ul className='list-unstyled d-flex'>
                  <li onClick={() => setPrivacyModal(true)}>
                    <p>Privacy Policy</p>
                  </li>
                  <li onClick={() => setTermsMmodal(true)}>
                    <p>Terms of Service</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StoryModal
        showModal={showStoryModal}
        handleClose={() => {
          setShowStoryModal(false);
        }}
      />
      <FaqModal
        showModal={showFaqModal}
        handleClose={() => {
          setShowFaqModal(false);
        }}
      />
      <PrivacyPolicyModal
        showModal={showPrivacyModal}
        handleClose={() => {
          setPrivacyModal(false);
        }}
      />
      <TermsConditionModal
        showModal={showsTermsModal}
        handleClose={() => {
          setTermsMmodal(false);
        }}
      />
    </footer>
  );
};

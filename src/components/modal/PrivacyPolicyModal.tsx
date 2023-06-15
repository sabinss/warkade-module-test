import React from 'react';
import { CustomModal } from './CustomModal';
import { AiOutlineClose } from 'react-icons/ai';

interface IFaqModal {
  showModal: boolean;
  handleClose: () => void;
}

export const PrivacyPolicyModal = ({ showModal, handleClose }: IFaqModal) => {
  return (
    <CustomModal show={showModal} handleClose={() => {}}>
      <div
        className='mint-modal faq-modal privacy-modal'
        style={{
          marginTop: 20,
          height: 700,
          overflow: 'hidden',
          overflowY: 'scroll',
        }}
      >
        <div className='mint-modal-header'>
          <div className='col-lg-11'>
            <h3 className='min-modal-header-title'>Privacy Policy</h3>
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
                  Your privacy is important to us. Aptos Warcade privacy policy
                  is to respect your privacy regarding any information we may
                  collect from you across our website,{' '}
                  <a href='https://aptoswarcade.com/'>aptoswarcade.com</a>
                </li>
                <li style={{ color: '#A48837' }}>
                  We only ask for personal information when we truly need it to
                  provide a service to you. With your knowledge and consent, we
                  collect it by fair and lawful means. We also let you know why
                  we’re collecting it and how it will be used.
                </li>
                <li>
                  We only retain collected information for as long as necessary
                  to provide you with your requested service. What data we
                  store, we’ll protect within commercially acceptable means to
                  prevent loss and theft, as well as unauthorized access,
                  disclosure, copying, use, or modification.
                </li>
                <li style={{ color: '#A48837' }}>
                  We don’t share any personally identifying information publicly
                  or with third parties, except when required to by law.
                </li>
                <li>
                  Our website may link to external sites that are not operated
                  by us. Please be aware that we have no control over the
                  content and practices of these sites, and cannot accept
                  responsibility or liability for their respective privacy
                  policies.
                </li>
                <li style={{ color: '#A48837' }}>
                  You are free to refuse our request for your personal
                  information, with the understanding that we may be unable to
                  provide you with some of your desired services.
                </li>
                <li>
                  Your continued use of our website will be regarded as
                  acceptance of our practices around privacy and personal
                  information. If you have any questions about how we handle
                  user data and personal information, feel free to contact us.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

import React from 'react';
import Modal from 'react-bootstrap/Modal';

interface ICustomModal {
  children: React.ReactNode;
  show: boolean;
  handleClose: () => void;
}

export const CustomModal = ({ children, show, handleClose }: ICustomModal) => {
  return (
    <Modal
      backdrop='static'
      show={show}
      onHide={() => handleClose()}
      className='modal-overlay'
    >
      {children}
    </Modal>
  );
};

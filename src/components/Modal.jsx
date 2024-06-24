import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Modal = ({ largeImageURL, onClose }) => {
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;

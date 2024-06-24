import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => (
  <li className="ImageGalleryItem" onClick={() => onClick(largeImageURL)}>
    <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

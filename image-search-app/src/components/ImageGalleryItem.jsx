import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ImageGalleryItem = ({ image, onImageClick }) => (
  <li className="ImageGalleryItem" onClick={() => onImageClick(image.largeImageURL)}>
    <img src={image.webformatURL} alt="" className="ImageGalleryItem-image" />
  </li>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

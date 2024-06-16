import React from 'react';
import './styles.css';

const ImageGalleryItem = ({ image, onImageClick }) => (
  <li className="ImageGalleryItem" onClick={() => onImageClick(image.largeImageURL)}>
    <img src={image.webformatURL} alt="" className="ImageGalleryItem-image" />
  </li>
);

export default ImageGalleryItem;

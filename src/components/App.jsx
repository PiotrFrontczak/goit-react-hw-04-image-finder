import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';

const API_KEY = '43689937-ac603d3a8790355bd35895aa3';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  useEffect(() => {
    if (!searchQuery) return;

    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://api.example.com/?q=${searchQuery}&page=${page}`);
        const data = await response.json();
        setImages(prevImages => [...prevImages, ...data.hits]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [searchQuery, page]);

  const handleSearchSubmit = query => {
    setSearchQuery(query);
    setImages([]);
    setPage(1);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleImageClick = largeImageURL => {
    setLargeImageURL(largeImageURL);
    toggleModal();
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearchSubmit} />
      {error && <p>Whoops, something went wrong: {error}</p>}
      <ImageGallery images={images} onClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <Button onClick={() => setPage(prevPage => prevPage + 1)} />}
      {showModal && <Modal largeImageURL={largeImageURL} onClose={toggleModal} />}
    </div>
  );
};

export default App;
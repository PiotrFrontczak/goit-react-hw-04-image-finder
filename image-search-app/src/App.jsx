import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Button from './components/Button';
import Modal from './components/Modal';
import '../src/components/styles.css';

const API_KEY = '43689937-ac603d3a8790355bd35895aa3';

class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    query: '',
    page: 1,
    showModal: false,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;
    const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({ loading: true });

    axios
      .get(url)
      .then((response) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...response.data.hits],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchSubmit = (query) => {
    this.setState({ query, images: [], page: 1 });
  };

  handleImageClick = (largeImageURL) => {
    this.setState({ largeImageURL, showModal: true });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { images, loading, showModal, largeImageURL } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {loading && <Loader />}
        {images.length > 0 && !loading && <Button onClick={this.fetchImages} />}
        {showModal && <Modal largeImageURL={largeImageURL} onClose={this.toggleModal} />}
      </div>
    );
  }
}

export default App;

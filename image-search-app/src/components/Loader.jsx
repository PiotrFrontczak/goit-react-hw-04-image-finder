import React from 'react';
import './styles.css';

const Loader = () => (
  <div className="Loader">
    <TailSpin color="#3f51b5" height={80} width={80} />
  </div>
);

export default Loader;

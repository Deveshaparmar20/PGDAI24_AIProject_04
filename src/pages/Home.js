import React from 'react';
import FileUploader from '../components/FileUploader';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <h2>Welcome to EmotiCare</h2>
      <p>Your trusted companion in emotional support.</p>
      <FileUploader />
    </div>
  );
}

export default Home;
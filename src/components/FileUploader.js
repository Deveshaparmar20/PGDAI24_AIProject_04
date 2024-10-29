import React, { useState } from 'react';
import '../styles/FileUploader.css';

function FileUploader() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => setFile(e.target.files[0]);

  const handleUpload = () => {
    if (file) {
      console.log(`Uploading: ${file.name}`);
      // Handle file upload to backend
    }
  };

  return (
    <div className="file-uploader">
      <h3>Upload Audio/Video for Emotion Analysis</h3>
      <input type="file" onChange={handleChange} accept="audio/*,video/*" />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUploader;
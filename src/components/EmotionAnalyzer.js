import React, { useState } from 'react';
import '../styles/EmotionAnalyzer.css';

function EmotionAnalyzer() {
  const [file, setFile] = useState(null);
  const [textInput, setTextInput] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleAnalyze = () => {
    setAnalysisResult('Analysis in progress...');
  };

  return (
    <div className="emotion-analyzer">
      <h2>Emotion Analyzer</h2>
      
      <div className="input-section">
        <label htmlFor="file-upload" className="file-upload-label">
          Upload Audio/Video File:
        </label>
        <input
          type="file"
          id="file-upload"
          accept="audio/*,video/*"
          onChange={handleFileChange}
        />

        <label htmlFor="text-input" className="text-input-label">
          Or Enter Text:
        </label>
        <textarea
          id="text-input"
          placeholder="Type here to analyze emotions from text..."
          value={textInput}
          onChange={handleTextInputChange}
        />

        <button onClick={handleAnalyze} className="analyze-button">
          Analyze
        </button>
      </div>

      {analysisResult && (
        <div className="result-section">
          <h3>Analysis Result:</h3>
          <p>{analysisResult}</p>
        </div>
      )}
    </div>
  );
}

export default EmotionAnalyzer;
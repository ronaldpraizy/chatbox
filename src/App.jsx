import React from 'react';
import OpenAssistantGPT from './OpenAssistantGPT'; // Ensure the import path is correct

const App = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Welcome to OpenAssistantGPT</h1>
      <OpenAssistantGPT />
    </div>
  );
};

export default App;
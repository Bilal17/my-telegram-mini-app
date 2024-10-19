// src/App.js
import React from 'react';
import './App.css';            // Import global styles
import TelegramMiniApp from './components/TelegramMiniApp';  // Import the Telegram component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Telegram Mini App</h1>
      </header>
      {/* Render the TelegramMiniApp component here */}
      <TelegramMiniApp />
    </div>
  );
}

export default App;

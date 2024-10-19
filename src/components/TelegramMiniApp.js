import React, { useEffect, useState } from 'react';

function TelegramMiniApp() {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const tg = window.Telegram.WebApp;

    // Expand the app to full height
    tg.expand();

    // Get user info from Telegram
    const initDataUnsafe = tg.initDataUnsafe;
    const user = initDataUnsafe?.user;
    setUser(user);

    return () => {
      // Close app or other cleanup if needed
    };
  }, []);

  const sendData = () => {
    // Example action: Send data back to Telegram
    window.Telegram.WebApp.sendData("Sample Data Sent");
  };

  const closeApp = () => {
    // Closes the mini app
    window.Telegram.WebApp.close();
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to Telegram Mini App</h1>
      {user ? (
        <p>
          Hello, {user.first_name} {user.last_name || ''}!
        </p>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={sendData}>Send Data to Telegram</button>
      <button onClick={closeApp}>Close App</button>
      <p>Status: {status}</p>
    </div>
  );
}

export default TelegramMiniApp;

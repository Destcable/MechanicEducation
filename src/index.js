import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './pages/main/mainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPage
      title='Машиностроение'
    />
  </React.StrictMode>
);
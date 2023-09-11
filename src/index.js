import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './pages/main/mainPage';
import LecturePage from './pages/lecture/LecturePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LecturePage 
      title="Машиностроение"
    />
    {/* <MainPage
      title='Машиностроение'
    /> */}
  </React.StrictMode>
);
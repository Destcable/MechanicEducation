import React from 'react';
import Header from './components/header/header';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header name="Artem"/>
  </React.StrictMode>
);


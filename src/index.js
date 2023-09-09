import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/header';
import Card from "./components/card/card";
import './components/header/header.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div>
          <Header name="Artem"/>

          <div className="main-block flex justify-center wrap">
              <Card />
          </div>

      </div>
  </React.StrictMode>
);


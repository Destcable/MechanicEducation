import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/header';
import './components/header/header.css';
import Card from "./components/card/card";

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


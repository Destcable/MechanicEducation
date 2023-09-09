import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/header';
import Card from "./components/card/card";
import Tringle from "./components/tringle/tringle";
import './components/header/header.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div>
          <Header name="Artem"/>

          <div className="main-block flex justify-center wrap">
              <Card />
          </div>

          <div className="flex triangle1">
              <Tringle />
          </div>

      </div>
  </React.StrictMode>
);


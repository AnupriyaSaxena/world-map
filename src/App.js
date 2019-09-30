import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (     
    <Router>
        <div className="container">
          <div className="logo-container"><span className="logo"></span></div>
          <div className="continents-container">
            <div className="continent">
              <div className="continent-img continent-img-africa"></div>
              <div className="continent-text">Africa</div>
            </div>
            <div className="continent">
              <div className="continent-img continent-img-asia"></div>
              <div className="continent-text">Asia</div>
            </div>
            <div className="continent">
              <div className="continent-img continent-img-europe"></div>
              <div className="continent-text">Europe</div>
            </div>
            <div className="continent">
              <div className="continent-img continent-img-northAmerica"></div>
              <div className="continent-text">North America</div>
            </div>
            <div className="continent">
              <div className="continent-img continent-img-australia"></div>
              <div className="continent-text">Australia</div>
            </div>
            <div className="continent">
              <div className="continent-img continent-img-southAmerica"></div>
              <div className="continent-text">South America</div>
            </div>
          </div>
          <div className="worldMap-container">
            <div className="worldMap"></div>
          </div>
        </div>
    </Router>
  );
}

export default App;
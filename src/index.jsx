import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import Proj from './Components/Pages/Proj';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Router>

    <Routes>
      <Route exact path='/Portfolio' Component={App}></Route>
      <Route path='/Portfolio/projet/:projectId' Component={Proj}></Route>
    </Routes>

    </Router>
  </StrictMode>
);

reportWebVitals(console.log);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import HomePage from './components/Homepage';
import AppliancesController from './components/HomeAppliancesController';
import DashboardEditor from './components/DashboardEditor';
import './styles/styles.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/appliances" element={<AppliancesController />} />
        <Route path="/dashboard/:id" element={<DashboardEditor />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


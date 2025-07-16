import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataForm from './pages/DataForm';
import Results from './pages/Results';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DataForm />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}
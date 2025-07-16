import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const workoutData = state?.workoutData;

  if (!workoutData) {
    return (
      <div className="container py-4">
        <p>No data found. Please go back and submit the form.</p>
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          Back to Form
        </button>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h3 className="mb-3">Your 3-Month Workout Plan</h3>
      
      {/* Simple JSON display for now */}
      <pre>{JSON.stringify(workoutData, null, 2)}</pre>

      <button className="btn btn-secondary mt-3" onClick={() => navigate('/')}>
        Back to Form
      </button>
    </div>
  );
}
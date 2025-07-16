import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DataForm() {
  const [data, setData] = useState({
    age: '',
    sex: '',
    experience: '',
    frequency: '',
    focus: '',
    m: '',
    ft: '',
    in: '',
    kg: '',
    lbs: '',
  });

  const [mode, setMode] = useState('imperial');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      age: data.age,
      sex: data.sex,
      experience: data.experience,
      frequency: data.frequency,
      focus: data.focus,
      mode: mode,
      meters: data.m,
      feet: data.ft,
      inches: data.in,
      kgs: data.kg,
      lbs: data.lbs,
    };

    fetch('http://localhost:8000/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        navigate('/results', { state: { workoutData: json } }); // PASS DATA TO RESULTS PAGE
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  if (loading) {
    return <div className="text-center mt-5"><h3>Loading your workout plan...</h3></div>;
  }

  return (
    <div className="container py-4">
      <h3 className="text-center mb-4">3-Month Workout Plan Builder</h3>
      <form onSubmit={handleSubmit}>
        
        {/* Text field */}
        <div style={{ marginTop: '20px' }}></div>
        <label className="form-label" style={{ fontWeight: 'bold' }}>Fitness Goals:</label>
        <div className="mb-3">
          <label className="form-label">Experience Level</label>
          <div className="d-flex gap-2"></div>
          <select className="form-select" name="experience" value={data.experience} onChange={handleChange} required>
            <option value="" disabled>select a level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Frequency Goal (days per week)</label>
          <div className="d-flex gap-2"></div>
          <select className="form-select" name="frequency" value={data.frequency} onChange={handleChange} required>
            <option value="" disabled>select a frequency</option>
            <option value="2 to 3">2 to 3 days</option>
            <option value="3 to 4">3 to 4 days</option>
            <option value="4 to 5">4 to 5 days</option>
            <option value="5 to 6">5 to 6 days</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Focus</label>
          <div className="d-flex gap-2"></div>
          <select className="form-select" name="focus" value={data.focus} onChange={handleChange} required>
            <option value="" disabled>select a focus</option>
            <option value="weight_loss">Weight Loss / Fat Burn</option>
            <option value="muscle_gain">Muscle Gain / Strength</option>
            <option value="endurance">Endurance / Cardio</option>
            <option value="flexibility">Flexibility & Mobility</option>
            <option value="toning">Toning & Conditioning</option>
            <option value="recovery">Low Impact / Recovery</option>
            <option value="core">Core & Stability</option>
          </select>
        </div>

        <div style={{ marginTop: '20px' }}></div>
          <label className="form-label" style={{ fontWeight: 'bold' }}>Personal Info:</label>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <div className="d-flex gap-2"></div>
          <input type="number" className="form-control" name="age" value={data.age} onChange={handleChange} required/>
        </div>
        <div className="mb-3">
          <label className="form-label">Sex</label>
          <div className="d-flex gap-2"></div>
          <select className="form-select" name="sex" value={data.sex} onChange={handleChange} required>
            <option value="" disabled>select your sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Radio toggle field */}
        <div className="mb-3">
          <div>
            <label className="me-3">
              <input type="radio" name="mode" value="imperial" checked={mode === 'imperial'} onChange={() => setMode('imperial')}/> Imperial
            </label>
            <label>
              <input type="radio" name="mode" value="metric" checked={mode === 'metric'} onChange={() => setMode('metric')}/> Metric
            </label>
          </div>
        </div>
        
        {mode === 'metric' ? (
          <div className="mb-3">
            <label className="form-label">Weight (kilograms)</label>
            <div className="d-flex gap-2"></div>
              <input type="number" name="kg" className="form-control" placeholder="kg" value={data.kg} onChange={handleChange} required/>
              <div className="d-flex gap-2"></div>
            <label className="form-label">Height (meters)</label>
            <div className="d-flex gap-2"></div>
              <input type="number" name="m" className="form-control" placeholder="m" value={data.m} onChange={handleChange} required/>
          </div>
        ) : (
          <div className="mb-3">
            <label className="form-label">Weight (pounds)</label>
            <div className="d-flex gap-2"></div>
              <input type="number" name="lbs" className="form-control" placeholder="lbs" value={data.lbs} onChange={handleChange} required/>
              <div className="d-flex gap-2"></div>
            <label className="form-label">Height (feet & inches)</label>
            <div className="d-flex gap-2">
              <input type="number" name="ft" className="form-control" placeholder="ft" value={data.ft} onChange={handleChange} required/>
              <input type="number" name="in" className="form-control" placeholder="in" value={data.in} onChange={handleChange} required/>
            </div>
          </div>
        )}

        <button type="submit" className="btn btn-success w-100">Submit</button>
      </form>
    </div>
  );
}

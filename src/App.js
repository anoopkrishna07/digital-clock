import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());
  const [is24HourFormat, setIs24HourFormat] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleFormat = () => {
    setIs24HourFormat((prevFormat) => !prevFormat);
  };

  const formatTime = (date) => {
    const options = {
      hour12: !is24HourFormat,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <div className="App" style={{ backgroundColor: 'beige', minHeight: '100vh' }}>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title">{formatTime(time)}</h1>
                <button className="btn btn-primary" onClick={toggleFormat}>
                  Toggle Format
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

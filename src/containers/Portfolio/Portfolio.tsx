import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-3">
      <button className="btn btn-primary me-4" onClick={() => navigate('homework-movie')}>HW Movie</button>
      <button className="btn btn-primary" onClick={() => navigate('homework-countries')}>HW Rest Countries</button>
      <div className="mt-3">
        <Outlet/>
      </div>
    </div>
  );
};

export default Portfolio;
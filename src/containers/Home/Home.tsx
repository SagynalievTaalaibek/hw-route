import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Tour from '../../components/Tour/Tour';
import { TourInterface } from '../../types';

interface Props {
  tours: TourInterface[];
  addTourToCart: (tour: TourInterface) => void;
}

const Home: React.FC<Props> = ({ tours, addTourToCart }) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="btn btn-success mt-4"
        onClick={() => navigate('/new-tour')}
      >
        Add new tour
      </button>
      <Outlet />
      <div className="row mt-4">
        {tours.map((tour) => (
          <Tour tour={tour} key={tour.id} onClick={addTourToCart} />
        ))}
      </div>
    </>
  );
};

export default Home;

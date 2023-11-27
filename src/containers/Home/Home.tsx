import React from 'react';
import { TourInterface } from '../../types';
import Tour from '../../components/Tour/Tour';
import { Outlet, useNavigate } from 'react-router-dom';

interface Props {
  tours: TourInterface[];
}

const Home: React.FC<Props> = ({tours}) => {
  const navigate = useNavigate();
  return (
    <>
      <button className="btn btn-success mt-4" onClick={() => navigate('/new-tour')}>Add new tour</button>
      <Outlet/>
      <div className="row mt-4">
          {
            tours.map((tour) => (
              <Tour tour={tour} key={tour.id} />
            ))
          }
      </div>
    </>
  );
};

export default Home;
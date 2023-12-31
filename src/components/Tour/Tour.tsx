import React from 'react';
import { TourInterface } from '../../types';

interface Props {
  tour: TourInterface;
  onClick: (tour: TourInterface) => void;
}

const Tour: React.FC<Props> = ({ tour, onClick }) => {
  return (
    <div className="col-4 mb-4" onClick={() => onClick(tour)}>
      <div className="card rounded overflow-hidden h-100">
        <img
          src={tour.img}
          className="card-img-top"
          alt={tour.name}
          style={{ height: '230px' }}
        />
        <div className="card-body">
          <h5 className="card-title">{tour.name}</h5>
          <p className="card-text">{tour.price}</p>
          <p className="card-text">{tour.description}</p>
        </div>
        <div className="p-3">
          <button className="btn btn-primary">Book</button>
        </div>
      </div>
    </div>
  );
};

export default Tour;

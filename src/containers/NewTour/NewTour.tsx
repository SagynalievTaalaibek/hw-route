import React from 'react';
import TourForm from '../../components/TourForm/TourForm';
import { TourInterface } from '../../types';

interface Props {
  addNewTour: (tour: TourInterface) => void;
}

const NewTour: React.FC<Props> = ({ addNewTour }) => {
  return (
    <div className="my-3">
      <TourForm onSubmit={addNewTour} />
    </div>
  );
};

export default NewTour;

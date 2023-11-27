import React, { useState } from 'react';
import { TourFormInterface, TourInterface } from '../../types';

interface Props {
  onSubmit: (tour: TourInterface) => void;
}

const TourForm: React.FC<Props> = ({ onSubmit }) => {
  const [tour, setTour] = useState<TourFormInterface>({
    name: '',
    price: '',
    description: '',
    img: '',
  });

  const changeTour = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setTour((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({
      id: Math.random(),
      ...tour,
      price: parseFloat(tour.price),
    });

    setTour({
      name: '',
      price: '',
      description: '',
      img: '',
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new tour</h4>
      <div className="form-group">
        <label htmlFor="name">Name Tour</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={tour.name}
          onChange={changeTour}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          className="form-control"
          value={tour.description}
          onChange={changeTour}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          type="url"
          name="img"
          id="img"
          className="form-control"
          value={tour.img}
          onChange={changeTour}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          className="form-control"
          value={tour.price}
          onChange={changeTour}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        Create New Tour
      </button>
    </form>
  );
};

export default TourForm;

import React from 'react';
import Cart from '../../components/Cart/Cart';
import { TourInterface } from '../../types';

interface Props {
  cartsTours: TourInterface[];
}

const BookTour: React.FC<Props> = ({ cartsTours }) => {
  return (
    <>
      {cartsTours.length > 0 ? (
        cartsTours.map((tour) => <Cart cartTout={tour} key={tour.id} />)
      ) : (
        <h2>Book Some new Tour</h2>
      )}
    </>
  );
};

export default BookTour;

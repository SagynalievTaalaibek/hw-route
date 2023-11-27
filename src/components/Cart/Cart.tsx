import React from 'react';
import { TourInterface } from '../../types';

interface Props {
  cartTout: TourInterface;
}

const Cart: React.FC<Props> = ({ cartTout }) => {
  return (
    <div className="card my-3">
      <div className="card-header">{cartTout.name}</div>
      <div className="card-body">
        <h5 className="card-text fw-bold">{cartTout.price}</h5>
        <p className="card-text">{cartTout.description}</p>
        <a href="#" className="btn-link">
          More
        </a>
      </div>
    </div>
  );
};

export default Cart;

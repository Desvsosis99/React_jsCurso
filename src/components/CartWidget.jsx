import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartWidget({ itemCount }) {
  return (
    <div className="ml-auto">
      <Link to="/cart">
        <button className="btn btn-light">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="badge bg-danger ms-2">{itemCount}</span>
        </button>
      </Link>
    </div>
  );
}

export default CartWidget;

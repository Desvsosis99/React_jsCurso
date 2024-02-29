import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
    return (
        <div className="ml-auto">
            <button className="btn btn-outline-light">
                <FontAwesomeIcon icon={faShoppingCart} />
                {/* Puedes añadir aquí un indicador de la cantidad de items en el carrito */}
                <span className="badge bg-danger ms-2">3</span> {/* Ejemplo con 3 items */}
            </button>
        </div>
    );
}

export default CartWidget;

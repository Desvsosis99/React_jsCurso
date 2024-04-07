import React, { useState } from 'react';

function CartPage({ cartItems, updateCartItem }) {
    const handleIncrease = (itemId) => {
        updateCartItem(itemId, cartItems[itemId] + 1);
    };

    const handleDecrease = (itemId) => {
        updateCartItem(itemId, cartItems[itemId] - 1);
    };

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {Object.keys(cartItems).map(itemId => (
                <div key={itemId}>
                    <h3>{/* Mostrar detalles del producto */}</h3>
                    <span>Cantidad: {cartItems[itemId]}</span>
                    <button onClick={() => handleIncrease(itemId)}>Aumentar</button>
                    <button onClick={() => handleDecrease(itemId)}>Disminuir</button>
                </div>
            ))}
        </div>
    );
}

export default CartPage;

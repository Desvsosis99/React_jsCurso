import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProducts, getProductsByCategory } from '../data/mockData';

function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    const products = categoryId ? getProductsByCategory(categoryId) : getAllProducts();
    setItems(products);
  }, [categoryId]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const updatedCart = { ...prevCart };
      if (updatedCart[product.id]) {
        updatedCart[product.id].quantity += 1;
      } else {
        updatedCart[product.id] = { ...product, quantity: 1 };
      }
      return updatedCart;
    });
  };

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <img src={item.imageUrl} alt={item.name} />
            <button onClick={() => addToCart(item)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;

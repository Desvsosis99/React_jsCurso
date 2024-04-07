import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../data/mockData';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const product = getProductById(itemId);
    setItem(product);
  }, [itemId]);

  if (!item) return <div>Cargando...</div>;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <img src={item.imageUrl} alt={item.name} />
      <p>Precio: ${item.price}</p>
    </div>
  );
}

export default ItemDetailContainer;

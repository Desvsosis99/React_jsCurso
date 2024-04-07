// Datos de categorías
const categories = [
  { id: 'speakers', name: 'Parlantes' },
  { id: 'headphones', name: 'Audífonos' },
  { id: 'microphones', name: 'Micrófonos' }
];

// Datos de productos
const products = [
  {
    id: 'p1',
    name: 'Parlante XYZ',
    category: 'speakers',
    description: 'Este parlante XYZ ofrece una calidad de sonido excepcional...',
    price: 100,
    imageUrl: '../public/parlante-xyz.webp'
  },
  {
    id: 'p2',
    name: 'Audífono ABC',
    category: 'headphones',
    description: 'Los audífonos ABC proporcionan una experiencia auditiva...',
    price: 50,
    imageUrl: '../public/audifono-abc.webp'
  },
  {
    id: 'p3',
    name: 'Micrófono 123',
    category: 'microphones',
    description: 'Micrófono 123 capta el sonido de forma clara y precisa...',
    price: 75,
    imageUrl: '../public/microfono-123.webp'
  }
];

export { products };

function getProductsByCategory(categoryId) {
  return products.filter(product => product.category === categoryId);
}

function getProductById(productId) {
  return products.find(product => product.id === productId);
}
function getAllProducts() {
  return products;
}

export { categories, getProductsByCategory, getProductById, getAllProducts };

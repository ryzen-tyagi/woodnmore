import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CartContext from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover mb-4" />
      <p className="text-lg font-semibold mb-4">${product.price}</p>
      <p>{product.description}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;

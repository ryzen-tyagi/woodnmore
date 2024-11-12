import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import { motion } from 'framer-motion';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(response => {
        console.log(response.data); // Log the response to verify its structure
        setProducts(response.data.products || []); // Adjust this if `products` is wrapped differently
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const renderPlaceholderCards = () => {
    return Array.from({ length: 6 }).map((_, index) => (
      <motion.div key={index} variants={cardVariants}>
        <ProductCard placeholder={true} />
      </motion.div>
    ));
  };

  return (
    <div className="container mx-auto py-10">
      <motion.h1
        className="text-3xl font-bold mb-6 text-yellow-600" // Golden text color
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Products
      </motion.h1>
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Array.isArray(products) && products.length > 0 ? (
          products.map(product => (
            <motion.div key={product.id} variants={cardVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))
        ) : (
          renderPlaceholderCards()
        )}
      </motion.div>
    </div>
  );
};

export default Products;

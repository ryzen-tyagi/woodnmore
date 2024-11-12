import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Home = () => {
  // State to manage visibility of divs
  const [isVisible, setIsVisible] = useState({
    hero: false,
    categories: false,
    about: false,
  });

  // Intersection Observer callback to toggle visibility on scroll
  useEffect(() => {
    const options = {
      rootMargin: '0px',
      threshold: 0.5, // Trigger animation when 50% of the element is in the viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prevState) => ({
            ...prevState,
            [entry.target.id]: true,
          }));
        }
      });
    }, options);

    // Observing elements
    observer.observe(document.getElementById('hero'));
    observer.observe(document.getElementById('categories'));
    observer.observe(document.getElementById('about'));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="container mx-auto text-center py-20 px-6 bg-gradient-to-b from-yellow-50 to-white">
      {/* Hero Section */}
      <motion.div
        id="hero"
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: isVisible.hero ? 1 : 0, y: isVisible.hero ? 0 : -100 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
      >
        <h1 className="text-5xl font-bold mb-6 text-brown-700">Welcome to WoodNmore</h1>
        <p className="mb-10 text-lg text-gray-700">
          Discover a curated collection of beautifully crafted wooden products, made to bring warmth and elegance to your space.
        </p>
        <Link
          to="/products"
          className="px-8 py-3 bg-yellow-600 text-white text-lg font-semibold rounded hover:bg-yellow-700 transition-colors"
        >
          Shop Now
        </Link>
      </motion.div>

      {/* Featured Categories Section */}
      <motion.div
        id="categories"
        className="mt-16"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: isVisible.categories ? 1 : 0, x: isVisible.categories ? 0 : -100 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
      >
        <h2 className="text-3xl font-semibold text-brown-700 mb-8">Explore Our Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Category Cards */}
          <motion.div
            className="bg-yellow-100 p-6 rounded-lg shadow-lg backdrop-blur-md"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: isVisible.categories ? 1 : 0, x: isVisible.categories ? 0 : -100 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
          >
            <div className="h-48 bg-brown-200 rounded mb-4 flex items-center justify-center">
              <span className="text-brown-600 font-bold text-xl">Furniture</span>
            </div>
            <p className="text-gray-700">Elegant wooden furniture crafted to perfection.</p>
          </motion.div>

          <motion.div
            className="bg-yellow-100 p-6 rounded-lg shadow-lg backdrop-blur-md"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: isVisible.categories ? 1 : 0, x: isVisible.categories ? 0 : 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
          >
            <div className="h-48 bg-brown-200 rounded mb-4 flex items-center justify-center">
              <span className="text-brown-600 font-bold text-xl">Decor</span>
            </div>
            <p className="text-gray-700">Unique decor pieces to elevate any space.</p>
          </motion.div>

          <motion.div
            className="bg-yellow-100 p-6 rounded-lg shadow-lg backdrop-blur-md"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: isVisible.categories ? 1 : 0, x: isVisible.categories ? 0 : 100 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
          >
            <div className="h-48 bg-brown-200 rounded mb-4 flex items-center justify-center">
              <span className="text-brown-600 font-bold text-xl">Tableware</span>
            </div>
            <p className="text-gray-700">Beautiful tableware that adds charm to every meal.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div
        id="about"
        className="mt-20 max-w-3xl mx-auto text-left"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isVisible.about ? 1 : 0, y: isVisible.about ? 0 : 100 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
      >
        <h2 className="text-3xl font-semibold text-brown-700 mb-4">About WoodNmore</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          At WoodNmore, we are passionate about bringing the timeless beauty of wood to your home.
          Our collection features handpicked products that combine elegance with sustainability, perfect
          for those who appreciate quality and craftsmanship. Whether you're looking to redecorate or find
          that one perfect piece, WoodNmore is here to inspire.
        </p>
      </motion.div>
    </div>
  );
};

export default Home;

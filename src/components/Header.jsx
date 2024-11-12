import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa'; // Cart icon from react-icons

const Header = () => (
  <motion.header
    className="bg-gradient-to-b from-yellow-50 to-white shadow-md py-6 sticky top-0 z-50"
    initial={{ opacity: 0, y: -100 }}  // Start from above and hidden
    animate={{ opacity: 1, y: 0 }}  // Fade in and move to normal position
    transition={{ duration: 0.8, type: "spring", stiffness: 50 }}  // Smooth spring animation
  >
    <div className="container mx-auto flex justify-between items-center px-6">
      {/* Logo Section */}
      <div className="text-brown-700 text-2xl font-bold">
        <Link to="/">WoodNmore</Link>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8 text-lg text-brown-700">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-600 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="hover:text-yellow-600 transition-colors"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-600 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-600 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Cart Icon Section */}
      <div className="md:flex items-center space-x-4">
        <Link to="/cart" className="text-brown-700 hover:text-yellow-600 transition-colors">
          <FaShoppingCart size={24} />
        </Link>
      </div>

      {/* Mobile Menu Button (hamburger) */}
      <div className="md:hidden">
        <button className="text-brown-700 hover:text-yellow-600">
          {/* Here you can add the hamburger icon for mobile */}
          <span className="block w-6 h-0.5 bg-brown-700 mb-1"></span>
          <span className="block w-6 h-0.5 bg-brown-700 mb-1"></span>
          <span className="block w-6 h-0.5 bg-brown-700"></span>
        </button>
      </div>
    </div>

    {/* Mobile Navigation Menu */}
    <div className="md:hidden mt-4">
      <ul className="space-y-4 text-lg text-brown-700">
        <li>
          <Link to="/" className="hover:text-yellow-600 transition-colors">Home</Link>
        </li>
        <li>
          <Link to="/products" className="hover:text-yellow-600 transition-colors">Products</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-600 transition-colors">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-yellow-600 transition-colors">Contact</Link>
        </li>
      </ul>
    </div>
  </motion.header>
);

export default Header;

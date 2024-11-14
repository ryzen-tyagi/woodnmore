import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa'; // Cart icon from react-icons
import { useState } from 'react'; // Import useState to handle menu toggle
import { FaHamburger } from "react-icons/fa";
import logo from "../../public/icon1.jpg";
import logo1 from "../../public/logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility

  // Toggle function for the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className="bg-gradient-to-b from-yellow-50 to-white shadow-md py-6 sticky top-0 z-50"
      initial={{ opacity: 0, y: -100 }} // Start from above and hidden
      animate={{ opacity: 1, y: 0 }} // Fade in and move to normal position
      transition={{ duration: 0.8, type: 'spring', stiffness: 50 }} // Smooth spring animation
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo Section */}
        <div className="text-brown-700 text-2xl flex font-bold">
          <div>
            <motion.img
              src={logo}
              className="size-10 bg-transparent"
              alt="Logo"
              initial={{ opacity: 0, scale: 0.8 }} // Starting properties
              animate={{ opacity: 1, scale: 1 }} // Properties after load
              transition={{ duration: 0.8 }} // Duration of animation
              whileHover={{ scale: 1.1 }} // Slightly enlarge on hover
            />            </div>
          <div className=''><Link to="/">WoodNmore</Link></div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-lg text-brown-700">
            <li>
              <Link to="/" className="hover:text-yellow-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-yellow-600 transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-600 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-600 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Cart Icon Section */}
        <div className="md:flex flex gap-6">
          <div>
            <Link to="/cart" className="text-brown-700 hover:text-yellow-600 transition-colors">
              <FaShoppingCart size={24} />
            </Link>
          </div>
          {/* Mobile Menu Button (hamburger) */}
          <div className="md:hidden">
            <button
              className="text-brown-700 hover:text-yellow-600"
              onClick={toggleMenu} // Toggle menu on button click
            >
              <logo />
              <FaHamburger size={24} className='' />
            </button>
          </div>
        </div>


      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden mt-4 transition-all duration-300 ${isMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'
          }`} // Add transition for smooth opening/closing
      >
        <ul className="space-y-4 text-lg text-brown-700 ml-4">
          <li>
            <Link to="/" className="hover:text-yellow-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-yellow-600 transition-colors">
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-600 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-600 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </motion.header>
  );
};

export default Header;

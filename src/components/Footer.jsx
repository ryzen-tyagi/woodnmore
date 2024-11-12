import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => (
  <motion.footer
    className="bg-brown-700 text-white py-12"
    initial={{ opacity: 0, y: 100 }}  // Start from below and hidden
    animate={{ opacity: 1, y: 0 }}  // Fade in and move to normal position
    transition={{ duration: 0.8, type: "spring", stiffness: 50 }}  // Smooth spring animation
  >
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Quick Links Section */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}  // Start from left off-screen
          animate={{ opacity: 1, x: 0 }}  // Fade in and move to normal position
          transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-4">
            <li>
              <Link to="/home" className="hover:text-yellow-600 transition-colors">
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
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-600 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact Information Section */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}  // Start from right off-screen
          animate={{ opacity: 1, x: 0 }}  // Fade in and move to normal position
          transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p className="mb-4">Email: <span className="text-yellow-600">info@woodnmore.com</span></p>
          <p className="mb-4">Phone: <span className="text-yellow-600">+1 (555) 123-4567</span></p>
          <p className="mb-4">Address: <span className="text-yellow-600">123 Wooden Ave, Craftsville</span></p>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}  // Start from below and hidden
          animate={{ opacity: 1, y: 0 }}  // Fade in and move to normal position
          transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="https://facebook.com" className="text-white hover:text-yellow-600 transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" className="text-white hover:text-yellow-600 transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" className="text-white hover:text-yellow-600 transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://pinterest.com" className="text-white hover:text-yellow-600 transition-colors">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 text-center text-sm text-gray-400">
        <p>&copy; 2024 WoodNmore. All rights reserved.</p>
      </div>
    </div>
  </motion.footer>
);

export default Footer;

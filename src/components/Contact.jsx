import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Import Intersection Observer Hook

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  // Intersection Observer for animations
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when in view
    threshold: 0.3, // Trigger when 30% of the element is in the viewport
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with API)
    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage('Thank you for contacting us! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="container mx-auto py-16 px-6 bg-gradient-to-b from-yellow-50 to-white">
      <motion.h1
        className="text-4xl font-bold text-center text-brown-700 mb-8"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
      >
        Contact Us
      </motion.h1>

      {/* Contact Form Section */}
      <motion.div
        ref={ref} // Attach the observer to this div
        className="max-w-2xl mx-auto bg-yellow-100 p-8 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 100 }} // Initial state: hidden
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }} // Animate based on visibility
        transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg text-brown-700">Your Name</label>
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-3 mt-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }} // Delay to stagger form fields
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg text-brown-700">Your Email</label>
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-3 mt-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.3 }} // Stagger animation
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg text-brown-700">Your Message</label>
            <motion.textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows="5"
              className="w-full p-3 mt-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.4 }} // Further delay for better stagger effect
            ></motion.textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-yellow-600 text-white text-lg font-semibold rounded-md hover:bg-yellow-700 transition-colors disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Send Message'}
            </button>
          </div>
        </form>

        {statusMessage && (
          <div className="mt-6 text-center text-green-600 font-semibold">
            {statusMessage}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ContactPage;

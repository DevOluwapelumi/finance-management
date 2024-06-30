// import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white p-4 text-center mt-4">
      <div className="container mx-auto">
        <p>&copy; 2024 Personal Finance Manager. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300">Terms of Service</a>
          <a href="#" className="hover:text-gray-300">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

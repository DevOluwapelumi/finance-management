// import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white p-4 text-center mt-1">
      <div className="container w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <p>&copy; 2024 Personal Finance Manager. All rights reserved.</p>
        <div className="space-x-4">
        <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
          <a href="#" className="hover:text-gray-300 me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
          <a href="#" className="hover:text-gray-300 me-4 md:me-6">Terms of Service</a>
          </li>
          <li>
          <a href="mailto:Ayomideshaun98@gmail.com" className="hover:text-gray-300 me-4 md:me-6">Contact Us</a>
          </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



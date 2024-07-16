import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 c-dark py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <a href="#" className="text-2xl font-bold">AI Survey Results</a>
        </div>
        <div className="mb-4">
          <a href="#" className="text-gray-400 hover:text-white mx-2">Home</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Introduction</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Key Insights</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Methodology</a>
        </div>
        <div className="mb-4">
          <p>&copy; {new Date().getFullYear()} AI Survey Results. All rights reserved.</p>
        </div>
        <div>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

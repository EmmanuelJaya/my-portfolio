// Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-black p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">Emma Portfolio</div>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white font-bold hover:text-cyan-200">Home</Link></li>
          <li><Link to="/about" className="text-white font-bold hover:text-cyan-200">About</Link></li>
          <li><Link to="/education" className="text-white font-bold hover:text-cyan-200">Education</Link></li>
          <li><Link to="/skills" className="text-white font-bold hover:text-cyan-200">Skills</Link></li>
          <li><Link to="/project" className="text-white font-bold hover:text-cyan-200">Project</Link></li>
          <li><Link to="/contact" className="text-white font-bold hover:text-cyan-200">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

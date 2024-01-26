// Menu.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = () => {
    // Close the menu when a menu item is clicked
    setIsMenuOpen(false);
  };

  return (
    <div className=" p-4">
      <button
        className="text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon className='text-xl hover:text-orange-500' icon={faBars} />
      </button>
      {isMenuOpen && (
        <div className="absolute bg-gray-800 p-4 mt-2 w-48 ">
          <ul>
            <li className="text-white h-8 border-b border-b-slate-500 mb-4 hover:border-b-orange-400">
              <Link to="about" smooth={true} duration={500} offset={-50} onClick={handleItemClick}>
                About
              </Link>
            </li>
            <li className="text-white h-8 border-b border-b-slate-500 mb-4 hover:border-b-orange-400">
              <Link to="skills" smooth={true} duration={500} offset={-50} onClick={handleItemClick}>
                Skills
              </Link>
            </li>
            <li className="text-white h-8 border-b border-b-slate-500 mb-4 hover:border-b-orange-400">
              <Link to="projects" smooth={true} duration={500} offset={-50} onClick={handleItemClick}>
                Projects
              </Link>
            </li>
            <li className="text-white h-8 border-b border-b-slate-500 mb-4 hover:border-b-orange-400">
              <Link to="contact" smooth={true} duration={500} offset={-50} onClick={handleItemClick}>
                Contact
              </Link>
            </li>
            
            {/* Add more menu items as needed */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;

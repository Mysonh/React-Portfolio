import React from 'react';
import './Navbar.css';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#links"
          onClick={() => handlePageChange('Links')}
          // Check to see if the currentPage is `Links`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Links' ? 'nav-link active' : 'nav-link'}
        >
          Links
        </a>
      </li>
    </ul>
  );
}



export default Navbar;

import { useState } from "react";
import "./Navbar.css";

const Navbar = ({ toggleSidebar }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">My React App</div>

        <div className="navbar-links">
          <a href="#" className="navbar-link">
            Home
          </a>
          <a href="#" className="navbar-link">
            About
          </a>
          <a href="#" className="navbar-link">
            Contact Us
          </a>
        </div>

        <div className="navbar-mobile-toggle">
          <button className="hamburger-button" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#" className="mobile-menu-link">
            Home
          </a>
          <a href="#" className="mobile-menu-link">
            About
          </a>
          <a href="#" className="mobile-menu-link">
            Contact Us
          </a>
          <button className="mobile-sidebar-toggle" onClick={toggleSidebar}>
            Open Sidebar ▶
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

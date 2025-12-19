import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-icon">📊</span>
          <div className="logo-text">
            <span className="logo-name">Rosana Evangelista</span>
            <span className="logo-subtitle">Estudio Contable</span>
          </div>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Menú">
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><button onClick={() => scrollToSection('servicios')}>Servicios</button></li>
          <li><button onClick={() => scrollToSection('equipo')}>Equipo</button></li>
          <li><button onClick={() => scrollToSection('proceso')}>Cómo trabajamos</button></li>
          <li><button onClick={() => scrollToSection('faq')}>FAQ</button></li>
          <li>
            <button 
              className="navbar-cta" 
              onClick={() => scrollToSection('contacto')}
            >
              Contacto
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


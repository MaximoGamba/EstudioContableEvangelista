const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">📊</span>
              <div className="logo-text">
                <span className="logo-name">Rosana Evangelista</span>
                <span className="logo-subtitle">Estudio Contable</span>
              </div>
            </div>
            <p className="footer-tagline">
              Asesoramiento contable claro para monotributistas, profesionales y PyMEs.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Navegación</h4>
            <ul>
              <li><button onClick={() => scrollToSection('servicios')}>Servicios</button></li>
              <li><button onClick={() => scrollToSection('clientes')}>¿Para quién?</button></li>
              <li><button onClick={() => scrollToSection('por-que')}>¿Por qué elegirnos?</button></li>
              <li><button onClick={() => scrollToSection('proceso')}>Cómo trabajamos</button></li>
              <li><button onClick={() => scrollToSection('faq')}>FAQ</button></li>
              <li><button onClick={() => scrollToSection('contacto')}>Contacto</button></li>
            </ul>
          </div>
          
          <div className="footer-services">
            <h4>Servicios</h4>
            <ul>
              <li>Monotributo</li>
              <li>Autónomos</li>
              <li>PyMEs y comercios</li>
              <li>Liquidación de sueldos</li>
              <li>Regularización fiscal</li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contacto</h4>
            <p>📍 Santa Rosa, La Pampa</p>
            <a 
              href="https://www.google.com/maps/place/Estudio+Contable+Rosana+Evangelista+Carina+Casti%C3%B1eira/@-36.6242315,-64.2856742,18z/data=!4m6!3m5!1s0x95c2cdabf3b41321:0x7b4585b90db95dfc!8m2!3d-36.6241977!4d-64.2845099!16s%2Fg%2F1v2kym74?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-map-link"
            >
              Ver ubicación en Google Maps
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {currentYear} Estudio Contable Rosana Evangelista. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;






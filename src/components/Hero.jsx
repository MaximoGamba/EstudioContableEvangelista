const Hero = () => {
  const whatsappNumber = "5491112345678"; // Reemplazar con el número real
  const whatsappMessage = encodeURIComponent("Hola Rosana, me gustaría hacer una consulta sobre servicios contables.");

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Asesoramiento contable
          </h1>
          
          <p className="hero-subtitle">
            Soy Rosana Evangelista, contadora pública. Acompaño a monotributistas, profesionales y PyMEs a ordenar sus números, cumplir con AFIP y pagar lo justo, sin sorpresas.
          </p>
          
          <ul className="hero-bullets">
            <li>
              <span className="bullet-icon">✓</span>
              Lenguaje claro, sin términos raros
            </li>
            <li>
              <span className="bullet-icon">✓</span>
              Acompañamiento cercano y recordatorios de vencimientos
            </li>
            <li>
              <span className="bullet-icon">✓</span>
              Trabajo 100% online si lo necesitás
            </li>
          </ul>
          
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Quiero una consulta inicial
            </button>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <span className="whatsapp-icon">💬</span>
              Escribirme por WhatsApp
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-header">
              <div className="card-dot"></div>
              <div className="card-dot"></div>
              <div className="card-dot"></div>
            </div>
            <div className="hero-card-content">
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Online</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">+15</span>
                <span className="stat-label">Años de experiencia</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">✓</span>
                <span className="stat-label">Sin sorpresas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <span>Descubrí más</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
};

export default Hero;


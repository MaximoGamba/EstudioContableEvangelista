import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tipoActividad: '',
    comentario: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const whatsappNumber = "5491112345678"; // Reemplazar con el número real
  const whatsappMessage = encodeURIComponent("Hola Rosana, me gustaría hacer una consulta sobre servicios contables.");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('¡Gracias! Te contactaremos pronto.');
      setFormData({
        nombre: '',
        email: '',
        tipoActividad: '',
        comentario: ''
      });
      
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  return (
    <section id="contacto" className="contact animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Hablemos</span>
          <h2 className="section-title">Agendemos tu consulta</h2>
          <p className="section-intro">
            Contame brevemente tu situación y te respondo con una propuesta o una primera orientación. 
            Podés trabajar conmigo 100% online.
          </p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="tipoActividad">Tipo de actividad</label>
                <select
                  id="tipoActividad"
                  name="tipoActividad"
                  value={formData.tipoActividad}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccioná una opción</option>
                  <option value="monotributo">Monotributo</option>
                  <option value="autonomo">Autónomo</option>
                  <option value="pyme">PyME</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="comentario">Comentario / Consulta</label>
                <textarea
                  id="comentario"
                  name="comentario"
                  value={formData.comentario}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Contanos brevemente tu situación o consulta..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar consulta'}
              </button>
              
              {submitMessage && (
                <div className="submit-message success">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
          
          <div className="contact-info">
            <div className="info-card">
              <h3>También podés escribirme directamente</h3>
              <p>Para una respuesta más rápida, contactame por WhatsApp.</p>
              
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <span className="whatsapp-icon">💬</span>
                Escribir por WhatsApp
              </a>
              
              <div className="info-divider"></div>
              
              <div className="location-info">
                <h4>📍 Ubicación</h4>
                <p>Santa Rosa, La Pampa</p>
                <a 
                  href="https://www.google.com/maps/place/Estudio+Contable+Rosana+Evangelista+Carina+Casti%C3%B1eira/@-36.6242315,-64.2856742,18z/data=!4m6!3m5!1s0x95c2cdabf3b41321:0x7b4585b90db95dfc!8m2!3d-36.6241977!4d-64.2845099!16s%2Fg%2F1v2kym74?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  Ver en Google Maps →
                </a>
              </div>
              
              <div className="work-mode">
                <h4>💻 Modalidad de trabajo</h4>
                <p>Atención presencial y 100% online</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-map">
          <h3 className="map-title">📍 Encontranos acá</h3>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1608.5!2d-64.2856742!3d-36.6242315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c2cdabf3b41321%3A0x7b4585b90db95dfc!2sEstudio%20Contable%20Rosana%20Evangelista%20Carina%20Casti%C3%B1eira!5e0!3m2!1ses-419!2sar!4v1702000000000!5m2!1ses-419!2sar"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del Estudio Contable Rosana Evangelista"
            ></iframe>
          </div>
          <a 
            href="https://www.google.com/maps/place/Estudio+Contable+Rosana+Evangelista+Carina+Casti%C3%B1eira/@-36.6242315,-64.2856742,18z/data=!4m6!3m5!1s0x95c2cdabf3b41321:0x7b4585b90db95dfc!8m2!3d-36.6241977!4d-64.2845099!16s%2Fg%2F1v2kym74?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary map-btn"
          >
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;


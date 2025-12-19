const Services = () => {
  const services = [
    {
      icon: "📋",
      title: "Monotributo y pequeños contribuyentes",
      items: [
        "Inscripción y alta en monotributo",
        "Cambios de categoría",
        "Seguimiento de topes y vencimientos"
      ]
    },
    {
      icon: "💼",
      title: "Autónomos y profesionales",
      items: [
        "Inscripción como responsable inscripto",
        "Declaraciones juradas",
        "Planeamiento impositivo básico"
      ]
    },
    {
      icon: "🏢",
      title: "PyMEs y comercios",
      items: [
        "Organización contable",
        "Libros y registraciones",
        "Análisis de resultados y reportes"
      ]
    },
    {
      icon: "👥",
      title: "Empleadores y sueldos",
      items: [
        "Liquidación de haberes",
        "Cargas sociales y sindicatos",
        "Altas y bajas en AFIP"
      ]
    },
    {
      icon: "🔧",
      title: "Regularización y deudas",
      items: [
        "Planes de pago",
        "Revisión de situación fiscal",
        "Ordenamiento de períodos atrasados"
      ]
    }
  ];

  return (
    <section id="servicios" className="services animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Lo que hacemos</span>
          <h2 className="section-title">Servicios contables y fiscales</h2>
          <p className="section-intro">
            Adaptamos el servicio al tamaño y realidad de tu actividad. 
            Podemos ayudarte con tareas puntuales o acompañarte de forma mensual.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <ul className="service-list">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <span className="check-icon">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


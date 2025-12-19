const Process = () => {
  const steps = [
    {
      number: "1",
      title: "Primer contacto",
      description: "Nos contás tu situación (actividad, facturación, dudas principales)."
    },
    {
      number: "2",
      title: "Relevamiento y propuesta",
      description: "Revisamos tu caso y preparamos una propuesta acorde al volumen de trabajo."
    },
    {
      number: "3",
      title: "Organización inicial",
      description: "Ordenamos tu situación actual (altas, ajustes, presentación de lo más urgente)."
    },
    {
      number: "4",
      title: "Acompañamiento mensual",
      description: "Te acompañamos mes a mes con vencimientos, presentaciones y consultas."
    }
  ];

  return (
    <section id="proceso" className="process animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Paso a paso</span>
          <h2 className="section-title">Así es el proceso de trabajo</h2>
        </div>
        
        <div className="timeline">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="timeline-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <span className="step-number">{step.number}</span>
              </div>
              <div className="timeline-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;


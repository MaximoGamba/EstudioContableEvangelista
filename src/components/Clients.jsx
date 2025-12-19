const Clients = () => {
  // Reemplazar con los nombres/logos reales de las empresas
  const clients = [
    { name: "Empresa 1", logo: null },
    { name: "Empresa 2", logo: null },
    { name: "Empresa 3", logo: null },
    { name: "Empresa 4", logo: null },
    { name: "Empresa 5", logo: null },
    { name: "Empresa 6", logo: null },
  ];

  return (
    <section id="clientes" className="clients animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Confían en nosotros</span>
          <h2 className="section-title">Empresas que trabajan con nosotros</h2>
          <p className="section-intro">
            Acompañamos a emprendedores, profesionales y PyMEs en su crecimiento.
          </p>
        </div>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-card">
              {client.logo ? (
                <img src={client.logo} alt={client.name} className="client-logo" />
              ) : (
                <div className="client-placeholder">
                  <span className="client-icon">🏢</span>
                  <span className="client-name">{client.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="clients-note">
          * Por confidencialidad, algunos clientes prefieren no ser mencionados públicamente.
        </p>
      </div>
    </section>
  );
};

export default Clients;


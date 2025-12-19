const Team = () => {
  const teamMembers = [
    {
      name: "Rosana Evangelista",
      title: "Contadora Pública Nacional",
      credentials: [
        "Universidad Nacional de La Pampa",
        "Matrícula Profesional Activa",
        "+15 años de experiencia"
      ],
      description: "Especializada en asesoramiento contable y fiscal para monotributistas, autónomos y PyMEs. Mi objetivo es que cada cliente entienda su situación fiscal y tome decisiones informadas.",
      image: null // Reemplazar con la ruta de la imagen cuando esté disponible
    }
  ];

  return (
    <section id="equipo" className="team animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Quiénes somos</span>
          <h2 className="section-title">Conocé al equipo</h2>
          <p className="section-intro">
            Profesionales comprometidos con tu tranquilidad fiscal.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                {member.image ? (
                  <img src={member.image} alt={member.name} />
                ) : (
                  <div className="team-image-placeholder">
                    <span>👩‍💼</span>
                  </div>
                )}
              </div>
              
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <span className="team-title">{member.title}</span>
                
                <ul className="team-credentials">
                  {member.credentials.map((credential, credIndex) => (
                    <li key={credIndex}>
                      <span className="credential-icon">🎓</span>
                      {credential}
                    </li>
                  ))}
                </ul>
                
                <p className="team-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;


import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿La atención puede ser 100% online?",
      answer: "Sí, podemos trabajar por email, WhatsApp y videollamadas. Solo necesitamos que nos envíes la documentación necesaria."
    },
    {
      question: "¿Cuánto cuesta el acompañamiento mensual?",
      answer: "Depende del tipo de actividad y el volumen de trabajo. En la primera consulta vemos tu caso y te paso un presupuesto claro."
    },
    {
      question: "¿Trabajás solo con monotributistas?",
      answer: "No, también trabajo con autónomos, responsables inscriptos y pequeñas empresas."
    },
    {
      question: "¿Podés ayudarme si ya tengo deuda con AFIP?",
      answer: "Sí, vemos el estado de tu situación y las opciones de regularización (planes de pago, etc.)."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Dudas frecuentes</span>
          <h2 className="section-title">Preguntas frecuentes</h2>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;


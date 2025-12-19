const WhatsAppButton = () => {
  const whatsappNumber = "5491112345678"; // Reemplazar con el número real
  const whatsappMessage = encodeURIComponent("Hola Rosana, me gustaría hacer una consulta sobre servicios contables.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <svg 
        viewBox="0 0 32 32" 
        className="whatsapp-float-icon"
        fill="currentColor"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.052 31.22l6.012-1.97C9.622 30.916 12.7 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.53 22.604c-.396 1.116-1.968 2.042-3.236 2.312-.868.184-2.002.33-5.82-1.252-4.886-2.024-8.026-6.97-8.27-7.294-.234-.324-1.97-2.626-1.97-5.006s1.246-3.554 1.688-4.04c.442-.488.966-.61 1.288-.61.322 0 .644.002.926.016.296.016.694-.112 1.086.828.396.954 1.35 3.292 1.466 3.532.118.24.198.52.04.838-.158.322-.236.522-.472.804-.234.282-.494.63-.706.846-.236.236-.482.492-.208.966.276.472 1.224 2.018 2.63 3.27 1.808 1.608 3.332 2.106 3.804 2.344.472.24.748.2 1.024-.118.276-.322 1.186-1.38 1.502-1.854.316-.474.632-.394 1.066-.236.434.156 2.762 1.302 3.234 1.538.474.24.788.354.906.552.116.198.116 1.148-.28 2.264z"/>
      </svg>
      <span className="whatsapp-float-text">¿Dudas? Escribinos</span>
    </a>
  );
};

export default WhatsAppButton;






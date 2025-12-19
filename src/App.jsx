import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Clients from './components/Clients';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import LoadingScreen from './components/LoadingScreen';
import useScrollAnimation from './hooks/useScrollAnimation';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Esperar a que la página cargue completamente
    const handleLoad = () => {
      // Mínimo 1.5s para que se vea la animación completa
      setTimeout(() => {
        setIsLoading(false);
      }, 1800);
    };

    // Si ya cargó, ejecutar igual
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  useScrollAnimation();

  return (
    <div className="app">
      {isLoading && <LoadingScreen />}
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Team />
        <Clients />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

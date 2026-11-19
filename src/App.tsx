import { useEffect } from 'react';
import Overlays from './components/Overlays';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Configurator from './components/Configurator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseDialog from './components/CaseDialog';
import { initRoccet } from './legacy/roccet';

export default function App() {
  useEffect(() => { initRoccet(); }, []);
  return (
    <>
      <Overlays />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Process />
        <Configurator />
        <Contact />
      </main>
      <Footer />
      <CaseDialog />
    </>
  );
}

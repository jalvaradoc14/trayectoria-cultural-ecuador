import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dances from './components/Dances';
import Gastronomy from './components/Gastronomy';
import MusicSection from './components/Music';
import Legends from './components/Legends';
import Festivities from './components/Festivities';
import DigitalProposal from './components/DigitalProposal';
import Essay from './components/Essay';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Dances />
        <Gastronomy />
        <MusicSection />
        <Legends />
        <Festivities />
        <DigitalProposal />
        <Essay />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="home">
          <Carousel />
        </section>
        <Features />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
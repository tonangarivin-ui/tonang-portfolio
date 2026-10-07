import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { SelectedWork } from '../components/SelectedWork';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Capabilities } from '../components/Capabilities';
import { Process } from '../components/Process';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <SelectedWork />
        <About />
        <Services />
        <Capabilities />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

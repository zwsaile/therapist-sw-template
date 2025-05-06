import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Approach from '../components/Approach';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Approach />
      <ContactForm />
    </main>
  );
}

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/layout/Hero';
import Overview from '@/components/layout/Overview';
import Services from '@/components/layout/Services';
import Process from '@/components/layout/Process';
import FAQ from '@/components/layout/FAQ';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="bg-background-dark text-white min-h-screen">
      <Navbar />
      <Hero />
      <Overview />
      <Services />
      <Process />
      <FAQ />
      <Footer />
    </div>
  );
}


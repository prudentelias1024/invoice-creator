import React from 'react'
import Image from "next/image";
import Navbar from '@/app/components/Navbar'
import Hero from '@/app/components/Hero'
import Pricing from "./components/Pricing";
import CoreHero from './components/CoreHero';
import Footer from './components/Footer';
export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <CoreHero/>
      <Pricing/>
      <Footer/>
     </div>
  );
}

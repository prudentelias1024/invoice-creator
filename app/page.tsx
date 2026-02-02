import React from 'react'
import Image from "next/image";
import Navbar from '@/app/components/Navbar'
import Hero from '@/app/components/Hero'
import Pricing from "./components/Pricing";
import CoreHero from './components/CoreHero';
export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <CoreHero/>
      <Pricing/>
     </div>
  );
}

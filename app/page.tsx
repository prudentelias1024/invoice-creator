
import Image from "next/image";
import Navbar from '@/app/components/Navbar'
import Hero from '@/app/components/Hero'
import Pricing from "./components/Pricing";
export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Pricing/>
     </div>
  );
}

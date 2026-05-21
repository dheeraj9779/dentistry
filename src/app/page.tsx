import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import Prefooter from "@/components/layouts/prefooter";
import Contact from "@/features/home/_components/contact";
import Hero from "@/features/home/_components/hero";
import Services from "@/features/home/_components/services";
import Specialists from "@/features/home/_components/specialists";

export default function Home() {
  return (
    <main className="bg-slate-50">
      {/* Header */}
      <div className="fixed top-0 z-50 w-full bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white "><Header/></div>
      
      {/* Hero Section */}
      <Hero/>

      {/* Services Section */}
      <Services/>
      
      {/* Specialists Section */}      
      <Specialists />

      {/* Enquiry Section */}
      <Contact/>

      {/* Prefooter Section */}
      <Prefooter/>
  
      {/* Footer */}
      <Footer/>
    </main>
  );
}



 
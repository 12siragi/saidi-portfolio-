import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import EmailSection from "./components/EmailSection";
import About from "./components/About";
import Footer from "./components/Footer"; // Import Footer component

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212] text-white">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <HeroSection />
        </section>

        <section className="mb-12">
          <About />
        </section>

        {/* Email Section */}
        <section>
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <EmailSection />
        </section>
      </div>

      {/* Add Footer */}
      <Footer />
    </main>
  );
}

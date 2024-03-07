import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Vision from "@/components/Vision";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="bg-gray-100 min-h-screen">
        <Header />
        <Hero />
      </section>

      {/* Mission and Vision */}
      <section className="min-h-screen flex flex-col gap-8" id="mission-and-vision">
        <Vision />
        <Mission />
      </section>
    

    {/*About us */}
      <section className="min-h-screen flex flex-col gap-8" id="About">
        <About/>
      </section>
    </main>
  );
        
  
  
}

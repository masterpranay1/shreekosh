import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Vision from "@/components/Vision";
import About from "@/components/About";
import USPTitle from "@/components/USPTitle";
import USPCards from "@/components/USPCards";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* <Header /> */}

      <section className="bg-gray-100 min-h-screen">
        <Hero />
      </section>

      {/* Mission and Vision */}
      <section
        className="min-h-screen flex flex-col gap-8"
        id="mission-and-vision"
      >
        <Vision />
        <Mission />
      </section>

      {/* Our USP */}
      <section
        className="min-h-screen bg-gray-100 flex flex-col gap-8 pt-8"
        id="our-usp"
      >
        <USPTitle />
        <USPCards />
      </section>

      {/*About us */}
      <section className="min-h-screen flex flex-col" id="about">
        <About />
      </section>
    </main>
  );
}

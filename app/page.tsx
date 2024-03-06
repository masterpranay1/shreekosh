import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Vision from "@/components/Vision";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="bg-gray-100 min-h-screen">
        <Header />
        <Hero />
      </section>

      {/* Mission and Vision */}
      <section className="min-h-screen flex flex-col gap-8">
        <Vision />
        <Mission />
      </section>
    </main>
  );
}

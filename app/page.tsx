import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="bg-gray-200 min-h-screen"> 
        <Header />
        <Hero />
      </section>
    </main>
  );
}

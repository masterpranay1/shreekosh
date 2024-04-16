import Hero from "@/components/Hero";
import CompanyList from "./components/CompanyList";
import WhyRetailersChooseUs from "./components/WhyRetailersChooseUs";
import HowWeWork from "./components/HowWeWork";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="min-h-screen">
        <Hero />
      </section>

      <section
        className="px-4 lg:px-24 xl:px-32 flex flex-col gap-8 md:gap-12 lg:gap-16 xl:gap-20 py-16 md:py-20 lg:py-24 bg-teal-50 border-y"
        id="companies"
      >
        <h2 className="text-4xl lg:text-5xl xl:text-6xl text-center font-extrabold text-teal-700 max-w-md lg:max-w-lg xl:max-w-2xl mx-auto">
          Trusted by <span className="text-primary">Leading</span> companies
        </h2>
        <CompanyList />
      </section>

      <section
        className="mx-4 lg:mx-24 xl:mx-32 flex flex-col gap-8 md:gap-12 lg:gap-16 xl:gap-20 py-16 md:py-20 lg:py-24"
        id="why-retailer-choose-us"
      >
        <WhyRetailersChooseUs />
      </section>

      <section
        className="px-4 lg:px-24 xl:px-32 flex flex-col gap-8 md:gap-12 lg:gap-16 xl:gap-20 py-16 md:py-20 lg:py-24 bg-teal-50 border-y"
        id="how-we-works"
      >
        <HowWeWork />
      </section>
    </main>
  );
}

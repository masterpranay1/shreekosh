import { Button } from "@/components/ui/button";
import Link from "next/link";

const CareersHero = () => {
  return (
    <section className="flex flex-row gap-12 lg:gap-20 p-8 md:p-12 lg:p-24 xl:px-32 border-y">
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <h1 className="text-2xl lg:text-3xl font-bold text-teal-800">Make a Difference in Healthcare: Join the Shrikosh Team</h1>
        <p className="lg:text-xl">We're revolutionizing access to medicine in India, and we're looking for passionate individuals to join our mission. Explore exciting career opportunities across various departments and be part of a company dedicated to improving healthcare for all.</p>
        <Button
          className="mt-8 bg-teal-800 hover:bg-teal-700 text-white rounded-xl mt-auto"
          asChild
        >
          <Link href="/careers#open-positions">
            View Open Positions
          </Link>
        </Button>
      </div>

      <div className="hidden md:flex w-1/2">
        <img src="/team.jpg" alt="Careers Hero" className="rounded-xl"/>
        </div>
    </section>
  )
}

export default function Careers() {
  return (
    <main>
      <CareersHero />
    </main>
  );
}

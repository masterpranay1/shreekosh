import { Button } from "@/components/ui/button";
import Link from "next/link";

const EndingHero = () => {
  return (
    <section className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 m-4 p-4 md:p-8 lg:p-12 rounded-xl bg-amber-50 border-2 my-24 max-w-4xl lg:mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-600 flex flex-col gap-2">
        <span className="text-4xl">
        🤩
        </span>
        <span>
          Experience the ShreeKosh difference - where efficiency meets excellence
          in every step of the process.
        </span>
      </h2>
      <Button
        className="bg-teal-800 hover:bg-teal-700 text-white rounded-xl px-4 w-full mt-4 text-xl"
        asChild
      >
        <Link href="/enquiry-form">Contact us</Link>
      </Button>
    </section>
  );
};

const SocialMediaSection = () => {
  return (
    <section className="flex flex-col gap-4">
      {/* <h2 className="text-2xl font-bold text-teal-800">
        Follow us on social media
      </h2> */}
      <div className="flex gap-4">
        <a
          href="https://www.facebook.com/shreekosh"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/social-media-icons/facebook.svg"
            alt="Facebook"
            className="w-8 h-8"
          />
        </a>
        <a
          href="https://www.instagram.com/shreekosh"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/social-media-icons/instagram.svg"
            alt="Instagram"
            className="w-8 h-8"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/shreekosh"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/social-media-icons/linkedin.svg"
            alt="LinkedIn"
            className="w-8 h-8"
          />
        </a>
      </div>
    </section>
  );
};

export default function Footer() {
  return (
    <footer className="">
      <EndingHero />
      <section className="px-4 md:px-8 lg:px-12 pt-8 border-t bg-teal-50 flex flex-col md:flex-row-reverse justify-between items-center">
        <SocialMediaSection />
        <span className="py-12 block text-xl lg:text-2xl text-teal-800 font-semibold">&copy; Shreekosh . All Rights Reserved</span>
      </section>
    </footer>
  );
}

"use client";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const EnquiryForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    const formData = e;

    formData.set("Date", new Date().toISOString());

    if (
      !formData.get("Name") ||
      !formData.get("Email") ||
      !formData.get("Number") ||
      !formData.get("Query")
    ) {
      alert("Please fill in all the fields");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbx2kP4nQlJOK_anvI35u2Q22O0hjVmJ4GIpofVi5ADET-IGHgGNvYtPH5-GcNpUM94c/exec",
        {
          method: "POST",
          body: JSON.stringify({
            Name: formData.get("Name"),
            Email: formData.get("Email"),
            Number: formData.get("Number"),
            Query: formData.get("Query"),
            Date: formData.get("Date"),
          }),
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
        }
      );
      setLoading(false);
    } catch (err: any) {
      alert("There was an error submitting the form. Please try again later.");
    }
  };

  return (
    <form
      className="flex flex-col mt-12 mx-auto max-w-96"
      action={handleSubmit}
    >
      <Input
        type="text"
        placeholder="Name"
        name="Name"
        className="p-4 md:p-8 text-lg my-2 bg-white border-0 rounded placeholder:text-slate-400"
      />
      <Input
        type="email"
        placeholder="Email"
        name="Email"
        className="p-4 md:px-8  my-2 text-lg bg-white border-0 rounded placeholder:text-slate-400"
      />
      <Input
        type="text"
        placeholder="Phone"
        name="Number"
        className="p-4 md:px-8  my-2 text-lg bg-white border-0 rounded placeholder:text-slate-400"
      />
      <Textarea
        placeholder="Query"
        name="Query"
        className="p-4 md:px-8  my-2 text-lg bg-white border-0 rounded placeholder:text-slate-400"
      />

      <Button
        type="submit"
        className="bg-teal-400 hover:bg-teal-500 hover:-translate-y-1 text-white rounded px-8 w-full mt-8"
        size={"lg"}
        onClick={() => {
          setLoading(true);
        }}
      >
        {loading ? <Loader2 size={24} className="animate-spin"/> : "Submit"}
      </Button>
    </form>
  );
};

export default function Enquiry() {
  return (
    <section className="h-screen w-full bg-gray-100">
      <Header />
      <section className="w-full bg-gray-100 p-8">
        <h1 className="text-teal-400 text-4xl font-extrabold text-center">
          Enquire Now
        </h1>
        <EnquiryForm />
      </section>
    </section>
  );
}

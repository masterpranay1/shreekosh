"use client";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "@/components/ui/DatePicker";
import { useEffect, useState } from "react";

const EnquiryForm = () => {

  const handleSubmit = async (e: any) => {
    const formData = e;

    formData.set("Date", new Date().toISOString());

    if(!formData.get("Name") || !formData.get("Email") || !formData.get("Phone") || !formData.get("Query")) {
      alert("Please fill in all the fields");
      return;
    }

    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycbx2kP4nQlJOK_anvI35u2Q22O0hjVmJ4GIpofVi5ADET-IGHgGNvYtPH5-GcNpUM94c/exec', {
      method: 'POST',
      body: JSON.stringify({
        Name: formData.get("Name"),
        Email: formData.get("Email"),
        Phone: formData.get("Number"),
        Query: formData.get("Query"),
        Date: formData.get("Date"),
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    console.log(res);
    const data = await res.json();
    console.log(data);

    } catch (err : any) {
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
        className="p-2 md:p-4 my-2 bg-white border-0 rounded"
      />
      <Input
        type="email"
        placeholder="Email"
        name="Email"
        className="p-2 md:p-4 my-2 bg-white border-0 rounded"
      />
      <Input
        type="text"
        placeholder="Phone"
        name="Phone"
        className="p-2 md:p-4 my-2 bg-white border-0 rounded"
      />
      <Textarea
        placeholder="Query"
        name="Query"
        className="p-2 md:p-4 my-2 bg-white border-0 rounded"
      />

      <button type="submit" className="bg-teal-400 text-white p-2 mt-8 rounded">
        Submit
      </button>
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

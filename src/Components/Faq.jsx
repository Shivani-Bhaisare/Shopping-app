import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const faqs = [
  {
    q: "How can I place an order?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alique eiusmod tempor incididunt ut labore et dolore magna aliqua  ",
  },
  {
    q: "Can I track my order after it’s been placed?",
    a: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    q: "Do you offer customer support?",
    a: "Yes, our team is available via email and chat during business hours.",
  },
  {
    q: "What is your return policy?",
    a: "Returns accepted within 30 days in original condition. See full policy for details.",
  },
  {
    q:"How to Create Account?",
    a:"Click on the Sign Up button on the top right corner, fill in your name, email, password, and then click Create Account. You will receive a confirmation email to verify your account."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(1); 

  return (
    <section className="bg-[#f6f6f6] py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <p className="text-center text-gray-800 font-medium text-xl ">FAQ</p>
        <h2 className="mt-2 text-center text-3xl md:text-5xl font-semibold text-gray-900">
          Questions? Look here.
        </h2>

        {/* List */}
        <div className="mt-14 space-y-4">
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              question={item.q}
              answer={item.a}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

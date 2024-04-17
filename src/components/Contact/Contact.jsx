import React, { useState } from "react";
import ContactForm from "./contactForm"; 

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setShowForm(true);
  };

  return (
    <>
      <span id="contact-section"></span>
      <div data-aos="zoom-in" className="dark:bg-black dark:text-white py-14">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6">
            <div className="col-span-2 space-y-3">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Let's collaborate on your upcoming car rental venture
              </h1>
              <p className="text-gray-400">
              Collaborate with us to create a successful venture in the car rental industry.{" "}
              </p>
            </div>
            <div className="sm:grid sm:place-items-center">
              <button
                onClick={handleClick}
                className="inline-block font-semibold py-2 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
      {showForm && <ContactForm />}
    </>
  );
};

export default Contact;

import React, { useEffect, useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import Faq from "../Sections/Faq";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const contactData = [
    {
      icon: <MdEmail />,
      link: "mailto:contact@thedubbery.com",
      name: "contact@thedubbery.com",
    },
    {
      icon: <FaPhone />,
      link: "tel:+8801301243863",
      name: "+880 13012 43863",
    },
    {
      icon: <IoLocationSharp />,
      link: "Mirpur DOHS, Dhaka",
      name: "Mirpur DOHS, Dhaka",
    },
  ];
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_t6ataqb", "template_s99ikhs", form.current, {
        publicKey: "YVsWeneB0Y7l_6U20",
      })
      .then(
        () => {
          setIsOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };
  return (
    <div className="min-h-screen">
      <section className="section_1 flex flex-col items-center px-10 py-16 text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">Contact Us</h1>
        <p className="max-w-lg text-justify  text-xs md:text-sm">
          Thank you for your interest in The Dubbery! We're here to answer any
          questions you may have about our services, collaborations, or
          partnerships. Feel free to reach out to us using the information.
        </p>
      </section>
      <section className="mt-20 flex flex-col justify-between gap-20 px-4 sm:px-20 pb-32 md:flex-row">
        <div className="w-full md:w-[40%]">
          <h4 className="border-grey border-b-2 pb-5 text-xl font-bold">
            Get In Touch
          </h4>
          <div className="mt-10">
            {contactData.map((item, index) => (
              <div key={index} className="mt-5 flex items-center">
                <div className="mr-3 text-[#3869e7]">{item.icon}</div>
                <a href={item.link} className="hover:underline">
                  {item.name}
                </a>
              </div>
            ))}
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7298.959613691923!2d90.36501103689002!3d23.837090178134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14a3366b005%3A0x901b07016468944c!2sMirpur%20DOHS%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1707581138198!5m2!1sen!2sbd"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mt-10 h-[300px] w-full rounded-xl shadow-xl"
          ></iframe>
        </div>
        <div className="w-full md:w-[60%]">
          <h1 className="border-grey border-b-2 pb-5 text-xl font-bold">
            Have an idea?
          </h1>
          <p className="mt-5 w-full text-xs sm:text-sm md:w-[70%]">
            We are always looking for new ideas and collaborations. If you have
            a project in mind, we would love to hear from you.
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Your Name"
              name="user_name"
              className="border-grey mt-5 w-full rounded-xl border px-3 py-3 sm:px-5 md:w-[70%]"
            />
            <input
              type="text"
              placeholder="Your Email"
              name="user_email"
              className="border-grey mt-5 w-full rounded-xl border px-3 py-3 sm:px-5 md:w-[70%]"
            />
            <textarea
              name="message"
              id=""
              rows="5"
              placeholder="Your Message"
              className="border-grey mt-5 w-full rounded-xl border px-3 py-3 sm:px-5 md:w-[70%]"
            ></textarea>
            <button
              type="submit"
              className="mt-5 w-full rounded-xl bg-[#3869e7] p-3 text-white hover:bg-[#1345c5] md:w-[70%]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <section className="px-10 py-10">
        <Faq />
      </section>
      {isOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-lg font-medium leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Success
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Your email has been sent successfully!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

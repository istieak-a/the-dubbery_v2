import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-xs font-semibold">Connect</h3>
        <h1 className="text-4xl md:text-5xl font-bold text-center">Get in Touch</h1>
        <p className="text-sm md:text-base text-center">
          Have a question or want to collaborate? Contact us!
        </p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex w-full flex-col items-start gap-3 md:w-[40%]"
      >
        <input
          type="text"
          placeholder="Name"
          name="user_name"
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          name="user_email"
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Send
        </button>
      </form>
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

export default ContactForm;

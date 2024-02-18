import React from "react";

const ContactForm = () => {
    return (
        <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-2">
                <h3 className="text-xs font-semibold">Connect</h3>
                <h1 className="text-5xl font-bold">Get in Touch</h1>
                <p className="text-sm md:text-base">
                    Have a question or want to collaborate? Contact us!
                </p>
            </div>
            <form action="" className="flex w-full md:w-[40%] flex-col items-start gap-3">
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <textarea
                    name=""
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
        </div>
    );
};

export default ContactForm;
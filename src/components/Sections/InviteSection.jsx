import React from "react";

const InviteSection = () => {
  return (
    <div className="flex flex-col items-center gap-3 px-4 md:px-0">
      <h1 className="text-center text-2xl font-bold text-info md:text-4xl lg:text-6xl">
        Join the Community <br /> Be Part of It
      </h1>
      <p className="mb-5 w-full text-center text-sm md:w-[50%] lg:w-[35%]">
        Collaborate with creators from around the world and bring your content
        to a global audience.
      </p>
      <a href="#contact-form">
        <button className="btn btn-outline btn-primary">Get Started</button>
      </a>
    </div>
  );
};

export default InviteSection;

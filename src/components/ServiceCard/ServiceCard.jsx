import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const ServiceCard = ({ ico, title, desc, btn }) => {
  return (
    <div className="bg-secondary hover:bg-info flex cursor-pointer flex-col items-start gap-3 rounded-xl border px-5 py-8 text-white shadow-xl duration-300 hover:scale-105">
      <img className="h-10" src={ico} alt="card-icon" />
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-md text-justify">{desc}</p>
      <button className="flex items-center gap-3 text-sm font-semibold">
        Learn More <RiArrowRightSLine />
      </button>
    </div>
  );
};

export default ServiceCard;

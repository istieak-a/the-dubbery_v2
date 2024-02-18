import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const ServiceCard = ({ ico, title, desc, btn }) => {
  return (
    <div className="flex cursor-pointer flex-col items-start gap-3 rounded-xl border bg-primary100 px-5 py-8 text-white shadow-xl duration-300 hover:scale-105 hover:bg-primary200">
      <img className="h-10" src={ico} alt="card-icon" />
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-md text-justify">{desc}</p>
      <button className="flex items-center gap-3 text-sm font-semibold">
        {btn} <RiArrowRightSLine />
      </button>
    </div>
  );
};

export default ServiceCard;

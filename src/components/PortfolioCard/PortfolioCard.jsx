import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const PortfolioCard = ({ img, title, desc }) => {
  return (
    <div className="flex flex-col gap-5 hover:scale-110 duration-300">
      <img className="rounded-xl " src={img} alt="card-image" />
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm text-justify  w-[80%]">{desc}</p>
        <button className="flex items-center gap-3 text-sm mt-4 font-semibold">
          Visit Now <RiArrowRightSLine />
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;

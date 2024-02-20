import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const PortfolioCard = ({ img, title, desc }) => {
  return (
    <div className="flex flex-col gap-5 duration-300 hover:scale-110">
      <img className="rounded-xl " src={img} alt="card-image" />
      <div>
        <h1 className="text-xl font-bold md:text-2xl">{title}</h1>
        <p className="w-[80%] text-justify text-xs  md:text-sm">{desc}</p>
        <button className="mt-4 flex items-center gap-3 text-sm font-semibold">
          Visit Now <RiArrowRightSLine />
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;

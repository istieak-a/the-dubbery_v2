import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const TeamCard = ({ img, title, role, desc, facebook, linkedin, twitter }) => {
  return (
    <div className="flex w-[350px] flex-col items-center rounded-lg bg-white p-5 text-center shadow-md">
      <img className="mb-5 h-24 w-24 rounded-full" src={img} alt="" />
      <div>
        <h1 className="mb-2 text-lg font-bold">{title}</h1>
        <h2 className="mb-3 text-gray-500">{role}</h2>
      </div>
      <p className="mb-5 line-clamp-4 text-gray-700">{desc}</p>
      <div className="flex gap-4">
        <a href="#" target="_blank" className="text-blue-700">
          <FaLinkedin />
        </a>
        <a href="#" target="_blank" className="text-blue-600">
          <FaFacebook />
        </a>
        <a href="#" target="_blank" className="text-blue-400">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;

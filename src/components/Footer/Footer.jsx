// import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const socialMedia = [
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com",
    },
    {
      name: "Twitter",
      icon: <FaXTwitter />,
      link: "https://www.twitter.com",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com",
    },
    {
      name: "Whatsapp",
      icon: <FaWhatsapp />,
      link: "https://www.whatsapp.com",
    },
  ];
  const footerLinks = [
    {
      name: "Career",
      link: "/career",
    },
    {
      name: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      name: "Terms and Conditions",
      link: "/terms-and-conditions",
    },
  ];
  return (
    <div className="flex flex-col gap-10 bg-bgdark py-10 md:px-16 md:py-20">
      <div className="flex flex-col items-center gap-7 md:flex-row md:justify-between">
        <Link to="/">
          <img className="h-10" src={logo} alt="the-dubbery" />
        </Link>
        <ul className="text-md flex flex-col items-center gap-4 text-white md:flex-row md:gap-10">
          <li className="font-medium hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="font-medium hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li className="font-medium hover:underline">
            <Link to="/services">Services</Link>
          </li>
          <li className="font-medium hover:underline">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex gap-4 md:gap-7">
          {socialMedia.map((social, index) => (
            <a
              href={social.link}
              className="text-xl text-gray-300 hover:text-white"
              target="_blank"
              key={index}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-6 flex flex-col-reverse items-center gap-5 border-t pt-10 text-sm text-white md:mx-0 md:flex-row md:justify-between ">
        <p className="text-center">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://istieakahmed.com"
            className="font-bold hover:underline"
          >
            Istieak Ahmed
          </a>
          . All rights reserved.
        </p>
        <div className="flex flex-col items-center gap-3 md:flex-row">
          {footerLinks.map((link, index) => (
            <Link className="hover:underline" to={link.link} key={index}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

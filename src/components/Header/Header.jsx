// import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Header = () => {
  const navData = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Contact", link: "/contact" },
  ];
  const contactData = [
    { title: "hello@istieakahmed.com", link: "#" },
    { title: "+880 15711-42863", link: "#" },
  ];
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
  const [navToggle, setNavToggle] = useState(false);
  const toggleVariants = {
    open: {
      rotate: 90,
    },
    closed: {
      rotate: 0,
    },
  };
  const menuAnimate = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 1, 0.2, 1],
      },
    },
    exit: {
      scaleY: 0,

      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const itemVariants = {
    initial: {
      transition: {
        staggerChildren: 0.9,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  };
  return (
    <header className="flex items-center justify-between bg-bgdark px-10 py-7 md:justify-around">
      <Link to="/">
        <img className="h-10" src={logo} alt="the-dubbery" />
      </Link>
      <motion.div
        variants={toggleVariants}
        animate={navToggle ? "open" : "closed"}
        className=" z-50 md:hidden"
      >
        {navToggle ? (
          <IoCloseSharp
            className="cursor-pointer text-4xl text-white "
            onClick={() => setNavToggle(!navToggle)}
          />
        ) : (
          <IoMenu
            className="cursor-pointer text-4xl text-white"
            onClick={() => setNavToggle(!navToggle)}
          />
        )}
      </motion.div>
      <AnimatePresence>
        {navToggle && (
          <motion.div
            variants={menuAnimate}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute left-0 top-0 z-40 h-screen w-full origin-top bg-bgdark p-10"
          >
            <div className="flex items-center">
              <img className="h-10" src={logo} alt="the-dubbery" />
            </div>
            <div className="flex flex-col gap-12 px-5 py-10">
              <motion.div
                variants={itemVariants}
                initial="initial"
                animate="open"
                exit="exit"
                className="flex flex-col gap-5"
              >
                {navData.map((item, index) => (
                  <div key={index} className="overflow-hidden">
                    <NavItem
                      setNavToggle={setNavToggle}
                      title={item.title}
                      link={item.link}
                    />
                  </div>
                ))}
              </motion.div>
              <div className="flex flex-col gap-8">
                <p className="tracking-[8px] text-[#cbc9e2]">SAY HELLO</p>
                <motion.div
                  variants={itemVariants}
                  initial="initial"
                  animate="open"
                  className="flex flex-col gap-3"
                >
                  {contactData.map((item, index) => (
                    <div key={index} className="overflow-hidden">
                      <NavItem
                        setNavToggle={setNavToggle}
                        title={item.title}
                        link={item.link}
                      />
                    </div>
                  ))}
                  <div className="flex gap-5 mt-5">
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
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ul className="hidden gap-10 text-xl text-white md:flex">
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
      <div className="hidden md:block">
        <Button>Get Started</Button>
      </div>
    </header>
  );
};

export default Header;

const linkVariants = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.55, 0, 0.45, 1],
    },
  },
};

const NavItem = ({ title, link, setNavToggle }) => {
  return (
    <motion.div variants={linkVariants}>
      <Link
        onClick={() => setNavToggle(false)}
        className="text-xl font-medium text-white hover:underline"
        to={link}
      >
        {title}
      </Link>
    </motion.div>
  );
};

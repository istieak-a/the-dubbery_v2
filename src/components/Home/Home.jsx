// import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./home.css";
import { BiCaretRight } from "react-icons/bi";
import ButtonAccent from "../Button/ButtonAccent";
import dubbing_mic from "../../assets/dubbing_mic.jpg";
import ServiceCard from "../ServiceCard/ServiceCard";
import { RiArrowRightSLine } from "react-icons/ri";

const Home = () => {
  const serviceData = [
    {
      ico: "https://img.icons8.com/ios/452/translation.png",
      title: "Customized Dubbing Solutions for Your Content",
      desc: "Our team of experienced dubbing professionals ensures that your content reaches a wider audience with localized voiceovers.",
      btn: "Learn More",
    },
    {
      ico: "https://img.icons8.com/ios/452/voice-presentation.png",
      title: "Engaging Short Videos for Maximum Impact",
      desc: "We create captivating short videos that grab attention and leave a lasting impression on your target audience.",
      btn: "Learn More",
    },
    {
      ico: "https://img.icons8.com/ios/452/microphone.png",
      title: "Seamless Distribution Across Multiple Platforms",
      desc: "We ensure that your content is effectively distributed across various platforms, maximizing its reach and impact.",
      btn: "Learn More",
    },
  ];
  return (
    <div>
      <section className="section_1 flex w-full flex-col items-center justify-center py-20 text-center text-white 2xl:py-36">
        <h1 className=" text-[8vw] font-black md:text-7xl xl:w-[70%] xl:text-7xl">
          Meet with your <br /> global audience!
        </h1>
        <p className="mt-5 line-clamp-3 w-[40%] text-xs">
          Break language barriers and connect with a global audience! Our audio
          translation services bring your content to life in multiple languages,
          ensuring your message resonates worldwide. Welcome to a new era of
          limitless reach and cross-cultural impact!
        </p>
        <Link to={`/services`}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-10 rounded-lg bg-[#3869e7] px-5 py-1 text-lg text-white shadow-md duration-300 hover:bg-[#1345c5] md:px-6 md:py-3 md:text-2xl"
          >
            Explore all services
          </motion.button>
        </Link>
      </section>
      <section className="section_2 flex w-full flex-col items-center justify-center gap-10 bg-bg100 px-10 py-20 text-text100 md:flex-row md:px-[8vw]">
        <div className="flex w-full flex-col items-start gap-5 md:w-[70%]">
          <h1 className="text-2xl font-bold text-accent200 md:text-4xl 2xl:text-5xl ">
            Empower Your Content with <br /> Our Unique Dubbing Service
          </h1>
          <p className="pe-0 text-justify text-sm font-medium md:pe-20">
            Our dubbing service helps content creators reach a global audience
            by providing high-quality dubbing, creating engaging shorts, and
            distributing across all platforms. We collaborate with creators,
            offering our services for free and sharing ad revenue.
          </p>
          <ul className="text-md mt-5 font-medium">
            <li>
              <BiCaretRight />
              <p>Professional Dubbing Services</p>
            </li>
            <li>
              <BiCaretRight />
              <p>Engaging Short Creations</p>
            </li>
            <li>
              <BiCaretRight />
              <p>Wide Platform Distribution</p>
            </li>
          </ul>
          <ButtonAccent>Learn More</ButtonAccent>
        </div>
        <div className="flex w-full cursor-pointer  items-center justify-center  overflow-hidden rounded-2xl bg-bg100 transition-all duration-300 hover:scale-105 md:w-1/2">
          <img className="h-full w-full" src={dubbing_mic} alt="" />
        </div>
      </section>
      <section className="flex flex-col gap-20 bg-bg100 px-10 py-20 md:px-[8vw]">
        <div className="flex flex-col justify-between gap-5 md:flex-row">
          <h1 className="w-[100%] text-3xl font-bold text-accent200">
            Professional Dubbing Services for Global Audience
          </h1>
          <p className="w-[80%] text-sm">
            We collaborate with creators to provide high-quality dubbing, create
            engaging shorts, and distribute content across multiple platforms.
          </p>
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              ico={service.ico}
              title={service.title}
              desc={service.desc}
              btn={service.btn}
            />
          ))}
        </div>
      </section>
      <section className="section_2 flex w-full flex-col items-center justify-center gap-10 bg-bg100 px-10 py-20 text-text100 md:flex-row md:px-[8vw]">
        <div className="flex w-full flex-col items-start gap-5 md:w-[70%]">
          <h2 className="font-bold text-sm">Empower</h2>
          <h1 className="text-2xl font-bold text-accent200 md:text-4xl 2xl:text-5xl ">
            Unlock Your Earning Potential with Ad Revenue Sharing
          </h1>
          <p className="pe-0 text-justify text-sm font-medium md:pe-20">
            At our agency, we believe in empowering creators by sharing ad
            revenue. When you collaborate with us, you not only get your videos
            dubbed and distributed on multiple platforms, but you also earn a
            share of the ad revenue generated by your content. It's a win-win
            situation!
          </p>
          <ul className="text-md mt-5 font-medium">
            <li>
              <BiCaretRight />
              <p>Dubbing Services</p>
            </li>
            <li>
              <BiCaretRight />
              <p>Global Audience Reach</p>
            </li>
            <li>
              <BiCaretRight />
              <p>No Upfront Costs</p>
            </li>
          </ul>
          <div className="flex gap-4">
            <button className="rounded-xl border-2 border-accent100 px-5 py-2 text-sm font-semibold">
              Learn More
            </button>
            <button className="flex items-center gap-2">Sign Up <RiArrowRightSLine /></button>
          </div>
        </div>
        <div className="flex w-full cursor-pointer items-center justify-center  overflow-hidden rounded-2xl bg-bg100 transition-all duration-300 hover:scale-105 md:w-1/2">
          <img className="h-full w-full" src={dubbing_mic} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;

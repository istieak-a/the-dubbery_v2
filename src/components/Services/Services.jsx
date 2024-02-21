import React, { useEffect } from "react";
// import distribution from "../../assets/distribution.png";
import mrBeast from "../../assets/mr_beast.jpg";
import Faq from "../Sections/Faq";
import { Link } from "react-router-dom";
import submit from "../../assets/submit.png";
import distributionWide from "../../assets/distributionWide.png";
import dubbingService from "../../assets/dubbingService.png";
import mobileShorts from "../../assets/mobileShorts.jpg";
import multiPlatform from "../../assets/multiPlaform.jpeg";
import globeWPeople from "../../assets/globewith_people.jpeg";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const serviceData = [
    {
      ico: submit,
      title: "Submit Your Content",
      desc: "Creators can easily submit their content to us for dubbing and distribution.",
    },
    {
      ico: distributionWide,
      title: "Professional Dubbing Services",
      desc: "Our team of experts provides high-quality dubbing services to enhance your content.",
    },
    {
      ico: dubbingService,
      title: "Wide Distribution Reach",
      desc: "We distribute your content across multiple platforms to maximize your reach.",
    },
  ];
  const serviceData2 = [
    {
      img: mobileShorts,
      title: "Short Creation",
      desc: "Let our team create captivating short videos that grab attention and drive engagement.",
    },
    {
      img: multiPlatform,
      title: "Multi-Platform Distribution",
      desc: "Expand your contents reach by distributing it across various platforms and maximize your audience.",
    },
    {
      img: globeWPeople,
      title: "Revenue Sharing",
      desc: "We share ad revenue with creators based on their audience size, ensuring a fair partnership.",
    },
  ];
  return (
    <div className="min-h-screen">
      <section className="section_1 flex flex-col items-center px-10 py-16 text-white">
        <h1 className="mb-4 text-center text-3xl font-bold md:text-6xl">
          Unlock Global Audience
        </h1>
        <p className="md:text-md max-w-lg text-center text-sm">
          We provide dubbing services to help creators reach a global audience.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center gap-10 px-10 py-20 text-center md:px-16">
        <div className="flex flex-col items-center">
          <h3 className="mb-2 text-xs font-semibold">Simplified</h3>
          <h1 className="mb-5 text-3xl font-bold md:text-5xl">
            Streamline the Dubbing and <br /> Distribution Process
          </h1>
          <p className="mt-5 w-full text-sm sm:w-1/2">
            Our agency offers a seamless process from content submission to
            dubbing and distribution. We work closely with creators to help them
            reach a global audience.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="flex cursor-pointer flex-col items-center gap-3 rounded-xl border bg-secondary px-5 py-8 text-white shadow-xl duration-300 hover:scale-105 hover:bg-info"
            >
              <img
                className="h-16 w-16 md:h-24 md:w-24"
                src={service.ico}
                alt="card-icon"
              />
              <h1 className="mt-5 text-xl font-bold">{service.title}</h1>
              <p className="md:text-md mt-2 text-justify text-xs">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <Link to="/contact">
            <button className="btn btn-secondary text-white">Learn More</button>
          </Link>
          <Link to="/contact">
            <button className="btn btn-outline btn-secondary">
              Get Started
            </button>
          </Link>
        </div>
      </section>
      <section className="flex w-full flex-col gap-20 px-10 py-20 md:px-16">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold text-info">Empower</h3>
            <h1 className="text-3xl font-bold text-info md:text-4xl">
              Unlock Your Content's <br /> Global Potential
            </h1>
          </div>
          <p className="mt-3 w-full text-justify text-sm md:w-1/2">
            Our agency offers a range of additional services to help creators
            reach a global audience. In addition to our dubbing service, we also
            specialize in creating short videos and distributing content across
            multiple platforms. With our expertise, you can expand your reach
            and engage with a wider audience.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {serviceData2.map((service, index) => (
              <div
                key={index}
                className="flex cursor-pointer h-[350px] flex-col items-center gap-3 rounded-xl border shadow-xl duration-300 hover:scale-105 hover:bg-secondary hover:text-white"
              >
                <img
                  className="md:h-2/1 h-2/5 w-full rounded-t-xl object-cover"
                  src={service.img}
                  alt="card-icon"
                />
                <div className="px-6">
                  <h1 className="mt-5 text-xl font-bold md:text-2xl">
                    {service.title}
                  </h1>
                  <p className="md:text-md mt-2  text-justify text-sm">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <Link to="/contact">
              <button className="btn btn-secondary text-white">
                Learn More
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn btn-outline btn-secondary">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="flex w-full px-10 py-20 md:px-16">
        <div className="flex w-full flex-col gap-3 md:w-[60%] md:pe-10">
          <h4 className="text-xs font-semibold text-info">Globalize</h4>
          <h1 className="text-3xl font-bold leading-snug md:text-5xl">
            Expand Your Audience <br /> Reach with Our Services
          </h1>
          <p className="w-full text-justify text-xs md:w-[90%] md:text-sm">
            Our agency specializes in providing dubbing services to creators,
            helping them reach a global audience. We collaborate with creators
            to dub their videos, create shorts, and distribute them across
            various platforms. The best part? Creators don't have to pay us. We
            take their videos, do the dubbing, and upload them, and in return,
            we share the ad revenue with them. The percentage of revenue shared
            depends on the size of their audience, ranging from 20-30%. We are
            just starting out, so we currently have a limited number of
            creators, but we are constantly expanding.
          </p>
          <div className="mt-5 flex">
            <div className="w-1/2">
              <h1 className="text-lg font-bold md:text-xl">Increased Reach</h1>
              <p className="text-sm">
                Reach a global audience and expand your content's reach across
                platforms.
              </p>
            </div>
            <div className="w-1/2">
              <h1 className="text-lg font-bold md:text-xl">Shared Revenue</h1>
              <p className="text-sm">
                Earn a share of the ad revenue generated from your dubbed
                videos.
              </p>
            </div>
          </div>
          <div className="mt-5 flex gap-4">
            <Link to="/contact">
              <button className="btn btn-secondary text-white">
                Learn More
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn btn-outline btn-secondary">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden w-[40%] overflow-hidden rounded-xl md:block">
          <img
            className="h-full w-full object-cover duration-300 hover:scale-110"
            src={mrBeast}
            alt="picture"
          />
        </div>
      </section>
      <section className="px-10 py-20 md:px-16">
        <Faq />
      </section>
    </div>
  );
};

export default Services;

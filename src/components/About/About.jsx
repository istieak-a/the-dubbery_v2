import React, { useEffect } from "react";
import "./about.css";
import Button from "../Button/Button";
import dubbing_mic from "../../assets/dubbing_mic2.png";
import { BiCaretRight } from "react-icons/bi";
import TeamCard from "../TeamCard/TeamCard";
import avatar from "../../assets/avatar.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import empower from "../../assets/empower.jpg";
import globeHand from "../../assets/globe-hand.jpeg";
import distribution from "../../assets/distribution.jpeg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const teamMembers = [
    {
      img: avatar,
      title: "John Doe",
      role: "Voice Artist",
      desc: "John is a versatile voice artist with a knack for bringing characters to life. He lends his voice to a wide range of projects, from animations to commercials.",
      facebook: "https://www.facebook.com/",
      linkedin: "https://www.linkedin.com/",
      twitter: "https://www.twitter.com/",
    },
    {
      img: avatar,
      title: "Emily Smith",
      role: "Video Editor",
      desc: "Emily is a skilled video editor who transforms raw footage into captivating visual stories. She ensures that every video meets the highest standards of quality and creativity.",
      facebook: "https://www.facebook.com/",
      linkedin: "https://www.linkedin.com/",
      twitter: "https://www.twitter.com/",
    },
    {
      img: avatar,
      title: "Alex Johnson",
      role: "Graphic Designer",
      desc: "Alex is a talented graphic designer who combines creativity with technical proficiency to deliver stunning visual concepts. He specializes in branding and digital design.",
      facebook: "https://www.facebook.com/",
      linkedin: "https://www.linkedin.com/",
      twitter: "https://www.twitter.com/",
    },
    {
      img: avatar,
      title: "Samantha Green",
      role: "Founder & CEO",
      desc: "Samantha is the visionary founder and CEO of our dubbing agency. With her leadership, we strive to revolutionize the way content is translated and dubbed for global audiences.",
      facebook: "https://www.facebook.com/",
      linkedin: "https://www.linkedin.com/",
      twitter: "https://www.twitter.com/",
    },
    {
      img: avatar,
      title: "Michael Brown",
      role: "Marketing Manager",
      desc: "Michael is a dynamic marketing manager who oversees our brand's presence across various platforms. He is passionate about connecting with audiences and driving growth.",
      facebook: "https://www.facebook.com/",
      linkedin: "https://www.linkedin.com/",
      twitter: "https://www.twitter.com/",
    },
    {
      img: avatar,
      title: "Sarah Lee",
      role: "Localization Specialist",
      desc: "Sarah is a dedicated localization specialist who ensures that our translated content resonates with diverse cultural audiences. She is fluent in multiple languages.",
      facebook: "https://www.facebook.com/",
      linkedin: "https://www.linkedin.com/",
      twitter: "https://www.twitter.com/",
    },
    {
      img: avatar,
      title: "David Rodriguez",
      role: "Technical Director",
      desc: "David is a seasoned technical director who oversees the implementation of cutting-edge technologies in our dubbing processes. He ensures seamless integration and efficiency.",
      facebook: "https://www.facebook.com/",
      linkedin: "https://www.linkedin.com/",
      twitter: "https://www.twitter.com/",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Change slides every 2 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="min-h-screen">
      <section className="section_1 flex flex-col items-center px-10 py-16 text-white">
        <h1 className="mb-4 text-center text-4xl font-bold md:text-6xl">
          Empowering Global Creators
        </h1>
        <p className="md:text-md max-w-lg text-center text-sm">
          We help creators reach a global audience through our professional
          dubbing services.
        </p>
      </section>
      <section className="section_2 flex w-full flex-col items-center justify-center gap-10 bg-gray-200 p-10 text-gray-800 md:flex-row md:px-16">
        <div className="flex w-full flex-col items-start gap-5 md:w-3/4">
          <h1 className="text-3xl font-bold text-blue-500 md:text-5xl 2xl:text-6xl">
            Empowering creators to <br /> reach a global audience
          </h1>
          <p className="pe-0 text-justify text-base font-medium md:pe-20">
            At our agency, we believe in helping creators expand their reach and
            connect with audiences worldwide. Through our dubbing services,
            short film creation, and platform distribution, we provide a unique
            approach to support creators in their journey to global success.
          </p>
          <Link to={`/contact`}>
            <button className="btn btn-outline btn-primary">Get Started</button>
          </Link>
        </div>
        <div className="hidden w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-gray-200 transition-all duration-300 hover:scale-105 md:flex md:w-1/2">
          <img className="h-full w-full" src={empower} alt="" />
        </div>
      </section>
      <section className="section_2 flex w-full flex-col items-center justify-center gap-10 bg-[#d5effc] p-10 text-gray-800 md:flex-row-reverse md:px-16">
        <div className="flex w-full flex-col items-start gap-5 md:w-3/4">
          <h1 className="text-3xl font-bold text-blue-500 md:text-5xl 2xl:text-6xl">
            Unlock Your Global Potential with Our Dubbing Services
          </h1>
          <p className="pe-0 text-justify text-base font-medium md:pe-20">
            Our agency's services benefit creators by expanding their reach and
            providing shared ad revenue.
          </p>
          <ul className="text-md mt-5 font-medium">
            <li>
              <BiCaretRight />
              <p>Increased Audience Reach</p>
            </li>
            <li>
              <BiCaretRight />
              <p>Enhanced Revenue Opportunities</p>
            </li>
            <li>
              <BiCaretRight />
              <p>Collaborative Partnership Approach</p>
            </li>
          </ul>
          <Link to={`/contact`}>
            <button className="btn btn-outline btn-primary">Get Started</button>
          </Link>
        </div>
        <div className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-gray-200 transition-all duration-300 hover:scale-105 md:w-1/2">
          <img className="h-full w-full" src={globeHand} alt="" />
        </div>
      </section>
      <section className="section_2 flex w-full flex-col items-center justify-center gap-10 bg-gray-200 p-10 text-gray-800 md:flex-row md:px-16">
        <div className="flex w-full flex-col items-start gap-5 md:w-3/4">
          <h1 className="text-3xl font-bold text-blue-500 md:text-5xl 2xl:text-6xl">
            Enhance your content with our professional dubbing, short creation,
            and distribution services.
          </h1>
          <p className="pe-0 text-justify text-base font-medium md:pe-20">
            Our agency specializes in providing high-quality dubbing, creating
            engaging shorts, and distributing content across multiple platforms.
            With our services, you can reach a global audience and maximize your
            content's impact.
          </p>
          <Link to={`/contact`}>
            <button className="btn btn-outline btn-primary">Get Started</button>
          </Link>
        </div>
        <div className="hidden w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-gray-200 transition-all duration-300 hover:scale-105 md:flex md:w-1/2">
          <img className="h-full w-full" src={distribution} alt="" />
        </div>
      </section>
      <section className="flex flex-col gap-10 px-10 py-20 md:px-16">
        <div className="flex flex-col gap-4 rounded-lg bg-gray-100 p-5 shadow-md">
          <h3 className="text-xs font-semibold text-blue-600">Passionate</h3>
          <h1 className="text-3xl font-bold text-blue-800 md:text-5xl">
            Our Team
          </h1>
          <p className="text-gray-700">
            Meet the talented individuals behind our agency.
          </p>
        </div>
        <div className="">
          <Slider {...settings}>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className=" flex items-center justify-center py-10"
              >
                <TeamCard {...member} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="flex flex-col items-start gap-3 rounded-lg bg-blue-100 px-10 py-20 shadow-md md:px-16">
        <h1 className="text-4xl font-bold text-blue-800">We're hiring!</h1>
        <p className="text-sm text-gray-700 md:text-lg">
          Join our team and help us build the future of digital experiences. We
          offer competitive salaries, flexible work hours, and the opportunity
          to make a big impact in a small, agile team.
        </p>
        <Link to={`/career`}>
          <button className="btn btn-primary">Get Started</button>
        </Link>
      </section>
    </div>
  );
};

export default About;

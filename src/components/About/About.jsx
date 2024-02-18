import React from "react";
import "./about.css";
import Button from "../Button/Button";
import dubbing_mic from "../../assets/dubbing_mic2.png";
import { BiCaretRight } from "react-icons/bi";
import TeamCard from "../TeamCard/TeamCard";
import avatar from "../../assets/avatar.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const About = () => {
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
      <section className="section_1 flex flex-col items-center py-16 text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Empowering Global Creators
        </h1>
        <p className="md:text-md max-w-lg text-center text-lg">
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            velit neque, molestiae eaque, distinctio cupiditate laborum ex a
            molestias tenetur, aspernatur fuga quod provident recusandae. Quia
            iure reprehenderit non earum!
          </p>
          <Button className="mt-5 bg-blue-500 text-white">Learn More</Button>
        </div>
        <div className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-gray-200 transition-all duration-300 hover:scale-105 md:w-1/2">
          <img className="h-full w-full" src={dubbing_mic} alt="" />
        </div>
      </section>
      <section className="section_2 flex w-full flex-col items-center justify-center gap-10 bg-gray-200 p-10 text-gray-800 md:flex-row-reverse md:px-16">
        <div className="flex w-full flex-col items-start gap-5 md:w-3/4">
          <h1 className="text-3xl font-bold text-blue-500 md:text-5xl 2xl:text-6xl">
            Unlock Your Global Potential with Our Dubbing Services
          </h1>
          <p className="pe-0 text-justify text-base font-medium md:pe-20">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            velit neque, molestiae eaque, distinctio cupiditate laborum ex a
            molestias tenetur, aspernatur fuga quod provident recusandae. Quia
            iure reprehenderit non earum!
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
          <Button className="mt-5 bg-blue-500 text-white">Learn More</Button>
        </div>
        <div className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-gray-200 transition-all duration-300 hover:scale-105 md:w-1/2">
          <img className="h-full w-full" src={dubbing_mic} alt="" />
        </div>
      </section>
      <section className="section_2 flex w-full flex-col items-center justify-center gap-10 bg-gray-200 p-10 text-gray-800 md:flex-row md:px-16">
        <div className="flex w-full flex-col items-start gap-5 md:w-3/4">
          <h1 className="text-3xl font-bold text-blue-500 md:text-5xl 2xl:text-6xl">
            Enhance your content with our professional dubbing, short creation,
            and distribution services.
          </h1>
          <p className="pe-0 text-justify text-base font-medium md:pe-20">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            velit neque, molestiae eaque, distinctio cupiditate laborum ex a
            molestias tenetur, aspernatur fuga quod provident recusandae. Quia
            iure reprehenderit non earum!
          </p>
          <Button className="mt-5 bg-blue-500 text-white">Learn More</Button>
        </div>
        <div className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-gray-200 transition-all duration-300 hover:scale-105 md:w-1/2">
          <img className="h-full w-full" src={dubbing_mic} alt="" />
        </div>
      </section>
      <section className="flex flex-col gap-10 px-10 md:px-16 py-20">
        <div className="flex flex-col gap-4 rounded-lg bg-gray-100 p-5 shadow-md">
          <h3 className="text-sm font-semibold text-blue-600">Passionate</h3>
          <h1 className="text-5xl font-bold text-blue-800">Our Team</h1>
          <p className="text-gray-700">
            Meet the talented individuals behind our agency.
          </p>
        </div>
        <div className="">
          <Slider {...settings}>
            {teamMembers.map((member, index) => (
              <div key={index} className=" py-10 flex items-center justify-center">
                <TeamCard {...member} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="px-10 md:px-16 flex flex-col gap-3 items-start py-20 bg-blue-100 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-blue-800">We're hiring!</h1>
        <p className="text-lg text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, excepturi.</p>
        <Button className="bg-blue-600 text-white py-2 px-4 rounded">Apply Now</Button>
      </section>
    </div>
  );
};

export default About;

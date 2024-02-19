import React from "react";
import distribution from "../../assets/distribution.png";
import mrBeast from "../../assets/mr_beast.jpg";

const Services = () => {
  const serviceData = [
    {
      ico: distribution,
      title: "Submit Your Content",
      desc: "Creators can easily submit their content to us for dubbing and distribution.",
    },
    {
      ico: distribution,
      title: "Professional Dubbing Services",
      desc: "Our team of experts provides high-quality dubbing services to enhance your content.",
    },
    {
      ico: distribution,
      title: "Wide Distribution Reach",
      desc: "We distribute your content across multiple platforms to maximize your reach.",
    },
  ];
  const serviceData2 = [
    {
      img: mrBeast,
      title: "Short Creation",
      desc: "Let our team create captivating short videos that grab attention and drive engagement.",
    },
    {
      img: mrBeast,
      title: "Multi-Platform Distribution",
      desc: "Expand your contents reach by distributing it across various platforms and maximize your audience.",
    },
    {
      img: mrBeast,
      title: "Revenue Sharing",
      desc: "We share ad revenue with creators based on their audience size, ensuring a fair partnership.",
    },
  ];
  return (
    <div className="min-h-screen">
      <section className="section_1 flex flex-col items-center py-16 text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Unlock Global Audience
        </h1>
        <p className="md:text-md max-w-lg text-center text-lg">
          We provide dubbing services to help creators reach a global audience.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center gap-10 px-10 py-20 text-center sm:px-16">
        <div className="flex flex-col items-center">
          <h3 className="mb-2 text-xs font-semibold">Simplified</h3>
          <h1 className="mb-5 text-5xl font-bold">
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
              className="flex cursor-pointer flex-col items-center gap-3 rounded-xl border bg-primary100 px-5 py-8 text-white shadow-xl duration-300 hover:scale-105 hover:bg-primary200"
            >
              <img
                className="h-16 w-16 md:h-24 md:w-24"
                src={service.ico}
                alt="card-icon"
              />
              <h1 className="mt-5 text-xl font-bold">{service.title}</h1>
              <p className="text-md mt-2 text-justify">{service.desc}</p>
            </div>
          ))}
        </div>
        <div>
          <button className="mr-4 rounded border-2 border-transparent bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
            Learn More
          </button>
          <button className="rounded border-2 border-blue-500 px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white">
            Sign Up
          </button>
        </div>
      </section>
      <section className="w-full px-10 py-20 md:px-16 flex flex-col gap-20">
        <div className="flex justify-between">
          <div>
            <h3 className="text-xs font-semibold">Empower</h3>
            <h1 className="text-4xl font-bold">
              Unlock Your Content's <br /> Global Potential
            </h1>
          </div>
          <p className="w-1/2 text-justify text-sm">
            Our agency offers a range of additional services to help creators
            reach a global audience. In addition to our dubbing service, we also
            specialize in creating short videos and distributing content across
            multiple platforms. With our expertise, you can expand your reach
            and engage with a wider audience.
          </p>
        </div>

        <div className=" grid grid-cols-1 gap-10 md:grid-cols-3">
          {serviceData2.map((service, index) => (
            <div
              key={index}
              className="flex cursor-pointer flex-col items-center gap-3 rounded-xl border shadow-xl duration-300 hover:scale-105 hover:bg-primary200 hover:text-white"
            >
              <img
                className="md:h-2/1 h-2/5 w-full rounded-t-xl object-cover"
                src={service.img}
                alt="card-icon"
              />
              <div className="px-6">
                <h1 className="mt-5 text-2xl font-bold">{service.title}</h1>
                <p className="text-md mt-2 line-clamp-3 text-justify">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;

import React, { useEffect } from "react";

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section className="section_1 flex flex-col items-center py-16 text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">Join Our Team</h1>
        <p className="md:text-md max-w-lg text-center text-lg">
          See our current job openings and become part of our talented team.
        </p>
      </section>

      <section className="bg-gray-100 px-10 py-20 md:px-16">
        <h2 className="mb-10 text-center text-4xl font-bold">Open Positions</h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="job-card rounded-lg bg-white p-5 shadow-md">
            <h3 className="text-2xl font-bold">Video Editor</h3>
            <p className="mt-2 text-gray-600">
              We are looking for a talented video editor to join our team. You
              will be responsible for editing and optimizing video content for
              various platforms.
            </p>
            <button className="btn btn-accent mt-5 rounded-lg bg-blue-500 px-4 py-2 text-white">
              Apply Now
            </button>
          </div>
          <div className="job-card rounded-lg bg-white p-5 shadow-md">
            <h3 className="text-2xl font-bold">Voice Artist</h3>
            <p className="mt-2 text-gray-600">
              We need experienced voice artists to provide voice over and
              dubbing services for client videos. Fluency in multiple languages
              is a plus.
            </p>
            <button className="btn btn-accent mt-5 rounded-lg bg-blue-500 px-4 py-2 text-white">
              Apply Now
            </button>
          </div>
          <div className="job-card rounded-lg bg-white p-5 shadow-md">
            <h3 className="text-2xl font-bold">Graphics Designer</h3>
            <p className="mt-2 text-gray-600">
              We are looking for a creative graphics designer to create visual
              concepts and graphics for our projects. Proficiency in design
              software is a must.
            </p>
            <button className="btn btn-accent mt-5 rounded-lg bg-blue-500 px-4 py-2 text-white">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;

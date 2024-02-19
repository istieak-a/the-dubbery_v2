import React from "react";

const Faq = () => {
  const faqData = [
    {
      title: "How do I submit my content for dubbing?",
      desc: "You can easily submit your content by filling out the form on our website. Our team will get in touch with you to discuss the details.",
    },
    {
      title: "What languages do you offer for dubbing?",
      desc: "We offer dubbing services in multiple languages to help creators reach a global audience. Our team of experts ensures high-quality dubbing that resonates with the target audience.",
    },
    {
      title: "What platforms do you distribute content to?",
      desc: "We distribute content across various platforms to maximize reach and engagement. Our team ensures that your content is optimized for each platform to drive maximum impact.",
    },
    {
      title: "How do you share ad revenue with creators?",
      desc: "We share ad revenue with creators based on their audience size and engagement. Our team ensures a fair partnership by offering a transparent revenue sharing model.",
    },
    {
      title: "How do I get started with your services?",
      desc: "You can get started by submitting your content to us. Our team will review your content and get in touch with you to discuss the details.",
    },
  ];
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-5xl font-bold">FAQs</h1>
        <p className="text-sm text-center">
          Find answers to common questions about our dubbing services and
          collaboration terms.
        </p>
      </div>
      <div className="flex flex-col gap-3 md:max-w-[70vw] border-t border-black pt-7">
        {faqData.map((faq, index) => (
          <div key={index} className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              {faq.title}
            </div>
            <div className="collapse-content">
              <p>{faq.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

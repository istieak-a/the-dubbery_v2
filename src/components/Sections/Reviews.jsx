import React, { useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import avatar from "../../assets/avatar.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      review:
        "Amazing work! They captured the energy of our video perfectly while providing a seamless localized experience.",
      img: avatar,
      name: "Sarah Johnson",
      desc: "Adventure Time Studios",
    },
    {
      review:
        "The voice actors were incredibly talented and the turnaround time was super fast. Highly recommend!",
      img: avatar,
      name: "Mike Peterson",
      desc: "TechMark Inc.",
    },
    {
      review:
        "They really understood the nuances of our brand voice. The final product exceeded our expectations.",
      img: avatar,
      name: "Emily Chen",
      desc: "Green Earth Initiative",
    },
    {
      review:
        "Professional, responsive, and a pleasure to work with. We'll definitely be using them for future projects.",
      img: avatar,
      name: "Alex Rodriguez",
      desc: "The Gaming Bros",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveIndex(next),
  };
  return (
    <div className="reviews-carousel">
      <Slider {...settings}>
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Slider>

      <button className="bg-blue-500 px-5 py-3 rounded-xl mr-5" onClick={() => setActiveIndex((index) => index - 1)}>Prev</button>

      <button className="bg-blue-500 px-5 py-3 rounded-xl mr-5" onClick={() => setActiveIndex((index) => index + 1)}>Next</button>
    </div>
  );
};

export default Reviews;

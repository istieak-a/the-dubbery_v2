import React, { useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import avatar from "../../assets/avatar.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

const NextArrow = ({ onClick }) => (
    <div className="next-arrow bg-gray-200 rounded-full cursor-pointer" onClick={onClick} style={{ right: "40px", position: "absolute", top: "50%" }}>
        <GrFormNext className="text-4xl" />
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div className="prev-arrow bg-gray-200 rounded-full cursor-pointer" onClick={onClick} style={{ left: "40px", position: "absolute", top: "50%" }}>
        <GrFormPrevious className="text-4xl" />
    </div>
);

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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="reviews-carousel">
      <Slider {...settings}>
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;

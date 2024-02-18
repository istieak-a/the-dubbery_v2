import React from "react";

const ReviewCard = ({ review, img, name, desc }) => {
  return (
    <div className="min-w-full flex flex-col items-center  gap-10">
      <p className="text-2xl w-[70%] text-center font-semibold">{review}</p>
      <div className="flex flex-col items-center">
        <img className="size-14 rounded-full" src={img} alt="client-picture" />
        <h1 className="text-xl font-medium">{name}</h1>
        <h4 className="text-xs">{desc}</h4>
      </div>
    </div>
  );
};

export default ReviewCard;

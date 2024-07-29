import React from "react";

const BannerServicsCard = ({ icon, number, title }) => {
  return (
    <div className="my-8">
      <div className="flex justify-center items-center gap-3">
        <span className="text-3xl text-sky-500">{icon}</span>
        <div>
          <h1 className="font-bold text-xl">{number}</h1>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default BannerServicsCard;

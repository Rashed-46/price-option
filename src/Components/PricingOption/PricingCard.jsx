import React from "react";
import Features from "./Features";

const PricingCard = ({ pricing }) => {
  const { name, price, description, features } = pricing;
  console.log(features);

  return (
    <div className="bg-amber-500 mb-4 text-black rounded-2xl p-3 flex flex-col">
      <h2 className="text-6xl">{name}</h2>
      <h3 className="text-3xl mt-4">{price}</h3>

      <div className="bg-amber-600 rounded-2xl p-3 mt-5 flex-1">
        <p>{description}</p>
        {features.map((features, index) => (
          <Features features={features} key={index}></Features>
        ))}
      </div>
      <button className="btn w-full rounded-2xl mt-2">Subcribe</button>
    </div>
  );
};

export default PricingCard;

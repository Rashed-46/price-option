import React from "react";
import PricingCard from "./PricingCard";

const PricingOption = ({ pricings }) => {
  return (
    <div>
      <h2 className=" mt-4 text-3xl text-center mb-2 bg-orange-700">
        Get Our Membership
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {pricings.map((pricing, index) => (
          <PricingCard pricing={pricing} key={index}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOption;

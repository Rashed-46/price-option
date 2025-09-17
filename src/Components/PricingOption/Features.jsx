import { CircleCheckBig } from "lucide-react";
import React from "react";

const Features = ({ features }) => {
  return (
    <div className=" ">
      <p className="flex mt-2">
        <CircleCheckBig className="mr-2"></CircleCheckBig>
        {features}
      </p>
    </div>
  );
};

export default Features;

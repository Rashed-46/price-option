import React from "react";

const Link = ({ route }) => {
  return (
    <div>
      {
        <li className="mr-4">
          <a href={route.path}>{route.element}</a>
        </li>
      }
    </div>
  );
};

export default Link;

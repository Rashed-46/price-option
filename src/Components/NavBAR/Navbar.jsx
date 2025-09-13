import React from "react";
import Link from "../Link/Link";

const Navbar = () => {
  const routes = [
    { path: "/", element: "Home" },
    { path: "/about", element: "About" },
    { path: "/contact", element: "Contact" },
    { path: "/services", element: "Services" },
    { path: "*", element: "NotFound" },
  ];

  return (
    <nav>
      <ul className="md:flex ">
        {routes.map((route, idx) => (
          <Link key={idx} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import Link from "../Link/Link";
import { IoMdMenu } from "react-icons/io";
import { RxDropdownMenu } from "react-icons/rx";

const Navbar = () => {
  const routes = [
    { path: "/", element: "Home" },
    { path: "/about", element: "About" },
    { path: "/contact", element: "Contact" },
    { path: "/services", element: "Services" },
    { path: "*", element: "NotFound" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-amber-300 text-black ">
      <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? <RxDropdownMenu /> : <IoMdMenu />}
      </div>
      <ul
        className={` absolute md:static px-2 mx-2 duration-1000 ${
          open ? "top-7" : "-top-60"
        } bg-amber-600 md:flex justify-around md:mx-0
          
        
        `}
      >
        {routes.map((route, idx) => (
          <Link key={idx} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

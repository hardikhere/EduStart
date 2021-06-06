import React from "react";
import NavbarB from "../Home/Navbar/NavbarB";
import "../Home/Navbar/Navbar.scss";
const Base = (props) => {
  return (
    <div {...props} >
      <NavbarB classes="p-shadow-6 p-mb-4" bg="white" />
      {props.children}
    </div>
  );
};

export default Base;

import React from "react";
import { BsMoon } from "react-icons/bs";

import Style from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <h4>Where in the World?</h4>
        <div className={Style.NavBar_box_dark}>
          <BsMoon />
          <p>Dark mode</p>
        </div>
      </div>
    </div>
  );
};

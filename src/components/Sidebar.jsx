import React from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

import "../styles/components/Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <NavLink className={"nav-link"} to="/" exact="true">
          <Icon
            icon="ic:round-home-work"
            color="white"
            width="17"
            height="17"
            style={{ backgroundColor: "#4EBAB6" }}
          />
          Work
        </NavLink>
        <NavLink className={"nav-link"} to="/personal">
          <Icon
            icon="material-symbols:person-rounded"
            color="white"
            width="17"
            height="17"
            style={{ backgroundColor: "#FF95C5" }}
          />
          Personal
        </NavLink>
        <NavLink className={"nav-link"} to="/studies">
          <Icon
            icon="ic:round-menu-book"
            color="white"
            width="17"
            height="17"
            style={{ backgroundColor: "#B983FF" }}
          />
          Studies
        </NavLink>
        <NavLink className={"nav-link"} to="/grocery">
          <Icon
            icon="mdi:local-grocery-store"
            color="white"
            width="17"
            height="17"
            style={{ backgroundColor: "#FFD523" }}
          />
          Grocery
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;

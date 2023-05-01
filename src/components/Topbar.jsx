import React from "react";
import { Badge } from "antd";

import profileImg from "../assets/profile.jpg";
import "../styles/components/Topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <h2>Welcome to, </h2>
        <h2 className="span-text">Task Manager</h2>
      </div>
      <div className="topbar-right">
        <div className="profile">
          <img src={profileImg} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;

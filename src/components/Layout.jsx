import React from "react";

import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import "../styles/components/Layout.scss";

const Layout = (props) => {
  return (
    <div className="layout-container">
      <Topbar />
      <div className="layout-main">
        <Sidebar />
        <div className="layout-right">
          <main>{props.children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;

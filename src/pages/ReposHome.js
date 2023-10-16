import React from "react";
import "../App.css";
import { Outlet } from "react-router-dom";

function ReposHome() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ReposHome;

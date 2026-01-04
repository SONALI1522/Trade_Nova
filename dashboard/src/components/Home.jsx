import React from "react";
// import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
 console.log("home");
  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;

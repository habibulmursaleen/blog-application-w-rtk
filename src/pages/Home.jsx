import React from "react";
import Blogs from "../components/HomeGrid/Blogs";
import Sidebar from "../components/Layout/Sidebar";
import "../styles/main.css";

const Home = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <Blogs />
    </div>
  );
};

export default Home;

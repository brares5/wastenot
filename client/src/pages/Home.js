import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/home.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <>
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> WasteNot </h1>
        <p> Share with others, don't waste food.</p>
        <Link to="/search">
          <button
          > SEARCH </button>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Home;

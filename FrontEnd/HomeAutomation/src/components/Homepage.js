import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Home Automation</h1>
      <Link to="/appliances">
        <button className="navigate-btn">Go to Home Appliances Controller</button>
      </Link>
    </div>
  );
};

export default HomePage;

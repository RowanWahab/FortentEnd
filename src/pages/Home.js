import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-hero">
      <h1>Welcome to ThinkAI 2025</h1>
      <p>
        The premier AI conference organized by KLH University — where 
        innovation meets intelligence. Join us to explore the future of 
        Artificial Intelligence, Machine Learning, and Ethics in Tech.
      </p>

      <div className="home-buttons">
        <Link to="/registration" className="btn">Register Now</Link>
        <Link to="/speakers" className="btn secondary">View Speakers</Link>
      </div>
    </div>
  );
}

export default Home;

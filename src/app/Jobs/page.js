"use client";

import Image from "next/image";
import React from "react";
import hiring from "./hiring.png";
import audience from "./audience.jpg";
import blockchain from "./blockchain.jpg";
import city from "./city.jpg";
import laptop from "./laptop.jpg";
import meeting from "./meeting.jpg";
import team from "./team.png";
import HiringSection from "./HiringSection.js";
import "./page.css";

const page = () => {
  return (
    <div className="hiring-segment">
      <div className="hiring-header">
        <p className="hiring-title">
          Join HexFork Team and Shape the Future of Success.
        </p>
        <Image
          className="img"
          src={hiring}
          alt="hiring-img"
          width={355}
          height={10}
          style={{ margin: "auto" }}
        />
      </div>
      <h2 className="hiring-desc">
        Together, we redefine boundaries and pave the way for groundbreaking
        achievements. Join us in shaping a future where dreams become realities
        and success knows no limits.
      </h2>
      <div className="multiImg">
        <div className="multiImg-top">
          <div className="single-img">
            <Image src={team} alt="team-img" />
            <button className="btn-over"> / Learn More</button>
          </div>

          <div className="single-img">
            <Image src={meeting} alt="meeting-img" />
            <button className="btn-over"> / Learn More</button>
          </div>
        </div>
        <div className="multiImg-bottom">
          <div className="single-img">
            <Image src={city} alt="city-img" />
          </div>
          <div className="single-img">
            <Image src={laptop} alt="laptop-img" />
          </div>
          <div className="single-img">
            <Image src={blockchain} alt="blockchain-img" />
          </div>
          <div className="single-img">
            <Image src={audience} alt="audience-img" />
          </div>
        </div>
      </div>
      <h2 className="hiring-heading">Work With Us</h2>
      <HiringSection />
    </div>
  );
};

export default page;

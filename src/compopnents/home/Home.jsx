import React from "react";
import Header from "../header/Header";
import { Typography } from "@mui/material";
import Rating from "../mui/Ratings";
import Card from "../mui/Card";
import StreamIcon from "@mui/icons-material/Stream";
import Music from "../mui/Music";
const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div>
          <Header />
        </div>
        <div style={{ padding: "4rem" }}></div>
        <div className="first-home-container">
          <div className="future">
            <Typography>Welcome to the Future of music</Typography>
          </div>

          <div className="future">
            <Typography>
              We are rated exactly the way we deliver the sound
            </Typography>
            <Rating />
          </div>

          <div>
            <StreamIcon
              className="stream"
              sx={{
                color: "#706c6c",
                width: "4rem",
                height: "4rem",
              }}
            />
          </div>
          <div className="second-home-container">
            <Music />
          </div>
        </div>
      </div>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
// import { width } from "@mui/system";

const Header = () => {
  // const [show, setShow] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <div>
      <div  className={
          isNavExpanded ? "navigation-menu-hidden" : "headerNav" 
        }>
        <div>
          <img
            src="https://www.novation.be/sites/default/files/2022-10/Drupal%20ontwikkeling.svg"
            alt="brand logo"
          />
        </div>
        <div className="hidden-nav-desk">
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="">Webshops</Link>
            </li>
            <li>
              <Link to="">Web applications</Link>
            </li>
            <li>
              <Link to="">about us and shops</Link>
            </li>
          </ul>
        </div>
        <div
          className="nav-toggle"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <span className="span"></span>
          <span className="span"></span>
          <span className="span"></span>
        </div>
      </div>

      <div
        className={
          isNavExpanded ? "navigation-menu-display" : "navigation-menu-hidden"
        }
      >
        <div className="close-back">
          <CloseIcon
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
            sx={{
              color: "#706c6c",
              width: "3rem",
              height: "3rem",
            }}
          />
        </div>
        <div className="drop-container">
          <ul className="drop-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="">Webshops</Link>
            </li>
            <li>
              {" "}
              <Link to="">Webshops</Link>
            </li>
            <li>
              <Link to="">Webshops</Link>
            </li>
            <li>
              <Link to="">Webshops</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

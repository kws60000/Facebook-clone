import React from "react";
import profile from "../assets/profile.png";
import search from "../assets/search.PNG";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div>
      <body>
        <header id="main-header-wrapper">
          <div id="main-header">
            <img className="header-logo" src={logo} alt={logo} />
            <form id="search-form">
              <input type="text" placeholder="검색" />
              <button type="submit">
                <img className="header-search" src={search} alt={search} />
              </button>
            </form>
            <div id="header-info">
              <div id="header-info-content">
                <span id="fb-info">
                  <img className="header-profile" src={profile} alt={profile} />
                  <Link to="Private">
                    <span className="Header-name">김우석</span>
                  </Link>
                </span>
                <span class="fb-spliter"> | </span>
                <Link to="/">
                  <span className="Header-home" id="fb-home">
                    홈
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </header>
      </body>
    </div>
  );
};

export default Header;
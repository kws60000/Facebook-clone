import React from "react";
import profile from "../assets/profile.png";
import search from "../assets/search.PNG";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Header.css";

const Header = ({ addWho }) => {
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
                  <Link to="Private">
                    <img
                      className="header-profile"
                      src={profile}
                      alt={profile}
                    />

                    {addWho.map((who) => (
                      <span className="Header-name" key={who.whoId}>
                        <div>{who.name}</div>
                      </span>
                    ))}
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

const mapStateToProps = (state) => {
  return {
    addWho: state.addWho,
  };
};
// Store에 저장된 개인정보의 현재 상태를 Props로 가져온다.

export default connect(mapStateToProps)(Header);
// Header 컴포넌트가 Store에 접근하게 만든다.

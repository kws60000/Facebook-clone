import React from "react";
import searchImg from "../assets/search.PNG";
import logoImg from "../assets/logo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Header.css";

const Header = ({ addWho, addImgProfile }) => {
  return (
    <div>
      <body>
        <header id="main-header-wrapper">
          <div id="main-header">
            <img className="header-logo" src={logoImg} alt={logoImg} />
            <form id="search-form">
              <input type="text" placeholder="검색" />
              <button type="submit">
                <img
                  className="header-search"
                  src={searchImg}
                  alt={searchImg}
                />
              </button>
            </form>
            <div id="header-info">
              <div id="header-info-content">
                <span id="fb-info">
                  <Link to="Private">
                    {addImgProfile.map((add) => (
                      <img
                        className="header-profile"
                        key={add.id}
                        src={add.profile}
                        alt={add.profile}
                      />
                    ))}

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
    addImgProfile: state.addImgProfile,
  };
};
// Store에 저장된 개인정보의 현재 상태, 프로필 이미지를 Props로 가져온다.

export default connect(mapStateToProps)(Header);
// Header 컴포넌트가 Store에 접근하게 만든다.

import React from "react";
import Post from "../components/Post";
import { connect } from "react-redux";

import "./Homepage.css";

const Homepage = ({ addWho, addImgProfile }) => {
  return (
    <div>
      <div className="App">
        <body>
          <section id="main-body-wrapper">
            <section id="main-body">
              <aside id="main-body-left">
                <ul class="user-info-list">
                  <li>
                    {addImgProfile.map((add) => (
                      <img key={add.id} src={add.profile} alt={add.profile} />
                    ))}
                    {addWho.map((who) => (
                      <div key={who.whoId}>{who.name}</div>
                    ))}
                  </li>
                </ul>
              </aside>
              <section id="main-body-middle">
                <Post />
              </section>
              <aside id="main-body-right">
                <div class="fb-box">
                  <ul class="language-wrapper">
                    <li>
                      <div>한국어 ·</div>
                    </li>
                    <li>
                      <div>English(Us) ·</div>
                    </li>
                    <li>
                      <div>中文(중국) ·</div>
                    </li>
                    <li>
                      <div>Español ·</div>
                    </li>
                    <li>
                      <div>Português (Brasil)</div>
                    </li>
                  </ul>
                </div>
                <ul class="language-wrapper">
                  <li>
                    <div>Privacy ·</div>
                  </li>
                  <li>
                    <div>Terms ·</div>
                  </li>
                  <li>
                    <div>Advertising ·</div>
                  </li>
                  <li>
                    <div>Ad Choices ·</div>
                  </li>
                  <li>
                    <div>Cookies ·</div>
                  </li>
                  <li>
                    <div href="#">
                      More <i class="fa fa-caret-down" aria-hidden="true"></i>
                    </div>
                  </li>
                </ul>
                <span class="footer">Facebook &copy; 2020</span>
                <span class="footer">Design by Dylan</span>
              </aside>
            </section>
          </section>
        </body>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    addWho: state.addWho,
    addImgProfile: state.addImgProfile,
  };
};
// Store에 저장된 개인정보의 현재 상태를 Props로 가져온다.

export default connect(mapStateToProps)(Homepage);
// Homepage 컴포넌트가 Store에 접근하게 만든다.

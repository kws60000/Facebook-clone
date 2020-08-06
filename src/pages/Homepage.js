import React from "react";
import profile from "../assets/profile.png";
import Post from "../components/Post";

import "./Homepage.css";

const Homepage = () => {
  return (
    <div>
      <div className="App">
        <body>
          <section id="main-body-wrapper">
            <section id="main-body">
              <aside id="main-body-left">
                <ul class="user-info-list">
                  <li>
                    <img src={profile} />
                    김우석
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
                      <a>한국어</a> ·
                    </li>
                    <li>
                      <a>English(Us)</a> ·
                    </li>
                    <li>
                      <a>中文(중국)</a> ·
                    </li>
                    <li>
                      <a>Español</a> ·
                    </li>
                    <li>
                      <a>Português (Brasil)</a>
                    </li>
                  </ul>
                </div>
                <ul class="language-wrapper">
                  <li>
                    <a>Privacy</a> ·
                  </li>
                  <li>
                    <a>Terms</a> ·
                  </li>
                  <li>
                    <a>Advertising</a> ·
                  </li>
                  <li>
                    <a>Ad Choices</a> ·
                  </li>
                  <li>
                    <a>Cookies</a> ·
                  </li>
                  <li>
                    <a href="#">
                      More <i class="fa fa-caret-down" aria-hidden="true"></i>
                    </a>
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

export default Homepage;

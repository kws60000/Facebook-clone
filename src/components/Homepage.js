import React from "react";
import profile from "../assets/profile.png";

import like from "../assets/like.PNG";
import chatbox from "../assets/chatbox.PNG";
import share from "../assets/share.PNG";
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
                <form id="post-status" class="fb-box">
                  <div id="status-content">
                    <img src={profile} />

                    <input
                      type="text"
                      placeholder="무슨 생각을 하고 계신가요?"
                    />
                  </div>
                  <div id="status-photo">
                    <span class="status-photo-span">
                      <input id="picture-upload" type="file" />
                      <label for="picture-upload" class="custom-file-upload">
                        사진추가
                      </label>
                    </span>
                    <span class="status-photo-span">
                      <input id="video-upload" type="file" />
                      <label for="video-upload" class="custom-file-upload">
                        동영상추가
                      </label>
                    </span>

                    <input id="file-upload" type="file" />
                  </div>

                  <div id="status-action">
                    <div id="status-button">
                      <button type="submit" class="button-hover">
                        게시
                      </button>
                    </div>
                  </div>
                </form>

                <div class="user-post fb-box">
                  <div class="user-post-title">
                    <a href="#">
                      <img src={profile} />
                    </a>
                    <span>
                      <a href="#">김우석</a>
                    </span>
                    <span>
                      1시간 전 <i class="fa fa-globe" aria-hidden="true"></i>{" "}
                    </span>
                  </div>
                  <div class="user-post-content">
                    <img src={profile} />
                  </div>

                  <div class="box-buttons">
                    <div class="row">
                      <button>
                        <img src={like} />
                      </button>
                      <button>
                        <img src={chatbox} />
                      </button>
                      <button>
                        <img src={share} />
                      </button>
                    </div>
                  </div>
                </div>
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

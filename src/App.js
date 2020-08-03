import React from "react";
import profile from "./assets/profile.png";
import search from "./assets/search.PNG";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <body>
        <header id="main-header-wrapper">
          <div id="main-header">
            <img className="header-logo" src={logo} />
            <form id="search-form">
              <input type="text" placeholder="검색" />
              <button type="submit">
                <img className="header-search" src={search} />
                compare 확인
              </button>
            </form>
            <div id="header-info">
              <div id="header-info-content">
                <span id="fb-info">
                  <img className="header-profile" src={profile} />
                  <span>김우석</span>
                  pull request 확인을 위하여
                </span>
                <span class="fb-spliter"> | </span>
                <span id="fb-home">홈</span>
              </div>
            </div>
          </div>
        </header>
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
                  <input type="text" placeholder="무슨 생각을 하고 계신가요?" />
                </div>
                <div id="status-photo">
                  <span class="status-photo-span">
                    <i class="fa fa-camera" aria-hidden="true"></i>
                    사진 추가
                  </span>
                  <span class="status-photo-span">
                    <i class="fa fa-book" aria-hidden="true"></i>
                    동영상 추가
                  </span>
                </div>

                <div id="status-action">
                  <div id="status-reaction"></div>
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
                <div class="user-post-reaction">
                  <span class="user-post-active">
                    <i class="fa fa-thumbs-up" aria-hidden="true"></i> Like
                  </span>
                  <span>
                    <i class="fa fa-comment" aria-hidden="true"></i> Comment
                  </span>
                  <span>
                    <i class="fa fa-share" aria-hidden="true"></i> Share
                  </span>
                </div>
              </div>
            </section>
            <aside id="main-body-right">
              <div class="fb-box">
                <ul class="language-wrapper">
                  <li>
                    <a href="#">English (US)</a> ·{" "}
                  </li>
                  <li>
                    <a href="#">Tiếng Việt</a> ·{" "}
                  </li>
                  <li>
                    <a href="#">中文(台灣)</a> ·{" "}
                  </li>
                  <li>
                    <a href="#">Español</a> ·{" "}
                  </li>
                  <li>
                    <a href="#">Português (Brasil)</a>
                  </li>
                </ul>
                <span class="language-plus span-button">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </span>
              </div>
              <ul class="language-wrapper">
                <li>
                  <a href="#">Privacy</a> ·{" "}
                </li>
                <li>
                  <a href="#">Terms</a> ·{" "}
                </li>
                <li>
                  <a href="#">Advertising</a> ·{" "}
                </li>
                <li>
                  <a href="#">Ad Choices</a> ·{" "}
                </li>
                <li>
                  <a href="#">Cookies</a> ·{" "}
                </li>
                <li>
                  <a href="#">
                    More <i class="fa fa-caret-down" aria-hidden="true"></i>
                  </a>{" "}
                </li>
              </ul>
              <span class="footer">Facebook &copy; 2020</span>
              <span class="footer">Design by ThinhLP</span>
            </aside>
          </section>
        </section>
      </body>
    </div>
  );
}

export default App;

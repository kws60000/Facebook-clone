import React from "react";
import profile from "../assets/profile.png";
import search from "../assets/search.PNG";
import logo from "../assets/logo.png";
import like from "../assets/like.PNG";
import chatbox from "../assets/chatbox.PNG";
import share from "../assets/share.PNG";

import "./Privatepage.css";

function Privatepage() {
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
              </button>
            </form>
            <div id="header-info">
              <div id="header-info-content">
                <span id="fb-info">
                  <img className="header-profile" src={profile} />
                  <span>김우석</span>
                </span>
                <span class="fb-spliter"> | </span>
                <span id="fb-home">홈</span>
              </div>
            </div>
          </div>
        </header>
        <div class="container">
          <div class="wrap">
            <div class="photo">Photo</div>
            <div class="top">
              <a href="" class="button1">
                프로필 수정
              </a>
            </div>
            <div class="bottom">
              <ul class="navigation">
                <li>
                  <a href="">타임라인</a>
                </li>
                <li>
                  <a href="">정보</a>
                </li>
                <li>
                  <a href="">친구</a>
                </li>
                <li>
                  <a href="">사진</a>
                </li>
                <li>
                  <a href="">더보기</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="middle">
          <div class="layout">
            <div>
              <div class="introduce">소개</div>
              <div class="pictures">사진첩</div>
            </div>
            <div class="right">
              <div class="makepost">
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
                      <label for="file-upload" class="custom-file-upload">
                        사진추가
                      </label>
                    </span>
                    <span class="status-photo-span">
                      <label for="file-upload" class="custom-file-upload">
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
              </div>

              <div class="timeline-post">
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
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Privatepage;

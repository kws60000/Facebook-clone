import React from "react";
import profile from "../assets/profile.png";
import search from "../assets/search.PNG";
import logo from "../assets/logo.png";

import background from "../assets/background.jpg";
import camera from "../assets/camera.png";

import like from "../assets/like.PNG";
import chatbox from "../assets/chatbox.PNG";
import share from "../assets/share.PNG";

import produce from "../assets/produce.png";
import picturebook from "../assets/picturebook.png";

import home from "../assets/home.png";
import job from "../assets/job.png";
import hometown from "../assets/hometown.png";
import school from "../assets/school.png";
import pop5 from "../assets/pop5.PNG";
import pop6 from "../assets/pop6.PNG";
import pop7 from "../assets/pop7.PNG";

import "./Privatepage.css";

function Privatepage() {
  return (
    <div className="App">
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
            <input id="background-picture-upload" type="file" />
            <label for="background-picture-upload">
              <img className="background-camera" src={camera} alt={camera} />
            </label>
            <button className="background-save">배경 저장</button>
            <input id="profile-picture-upload" type="file" />
            <label for="profile-picture-upload">
              <img className="profile-camera" src={camera} alt={camera} />
            </label>
            <button className="profile-save">프로필 저장</button>
            <img src={profile} class="photo" alt={profile}></img>
            <img src={background} class="top" alt={background}></img>
            <p class="button1">프로필 수정</p>
            <div class="bottom">
              <ul class="navigation">
                <li>
                  <div href="">타임라인</div>
                </li>
                <li>
                  <div href="">정보</div>
                </li>
                <li>
                  <div href="">친구</div>
                </li>
                <li>
                  <div href="">사진</div>
                </li>
                <li>
                  <div href="">더보기</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="middle">
          <div class="layout">
            <div>
              <div class="introduce">
                <div className="produce-headers">
                  <img
                    className="produce-header"
                    src={produce}
                    alt={produce}
                  ></img>
                  <div className="produce-headerline">소개</div>
                </div>
                <ul className="introduce-somethings">
                  <div className="introduce-something">
                    <img className="introduce-me" src={home} alt={home} />
                    <div className="introduce-blue">제주 </div> &nbsp;거주
                  </div>
                  <div className="introduce-something">
                    <img className="introduce-me" src={job} alt={job} />
                    <div className="introduce-blue">5년 뒤 네이버 </div>{" "}
                    &nbsp;근무
                  </div>
                  <div className="introduce-something">
                    <img className="introduce-me" src={school} alt={school} />
                    <div className="introduce-blue">제주대 </div> &nbsp;졸업
                  </div>
                  <div className="introduce-something">
                    <img
                      className="introduce-me"
                      src={hometown}
                      alt={hometown}
                    />
                    <div className="introduce-blue">제주 </div> &nbsp;출신
                  </div>
                </ul>
              </div>
              <div class="pictures">
                <div className="produce-headers">
                  <img
                    className="produce-header2"
                    src={picturebook}
                    alt={picturebook}
                  ></img>
                  <div className="produce-headerline">사진</div>
                </div>
                <div className="pictures3">
                  <img src={pop5} alt={pop5}></img>
                  <img src={pop6} alt={pop6}></img>
                  <img src={pop7} alt={pop7}></img>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="makepost">
                <form id="post-status" class="fb-box">
                  <div id="status-content">
                    <img src={profile} alt={profile} />

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
                    <div className="post-title-profile">
                      <img src={profile} alt={profile} />
                    </div>
                    <span>
                      <div>김우석</div>
                    </span>
                    <span>
                      1시간 전 <i class="fa fa-globe" aria-hidden="true"></i>{" "}
                    </span>
                  </div>
                  <div class="user-post-content">
                    <img src={profile} alt={profile} />
                  </div>

                  <div class="box-buttons">
                    <div class="row">
                      <button>
                        <img src={like} alt={like} />
                      </button>
                      <button>
                        <img src={chatbox} alt={chatbox} />
                      </button>
                      <button>
                        <img src={share} alt={share} />
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

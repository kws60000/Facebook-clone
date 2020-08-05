import React from "react";
import "./Profileedit.css";

import profile from "../assets/profile.png";

import background from "../assets/background.jpg";
import camera from "../assets/camera.png";

import produce from "../assets/produce.png";
import home from "../assets/home.png";
import job from "../assets/job.png";
import hometown from "../assets/hometown.png";
import school from "../assets/school.png";

const Profileedit = () => {
  return (
    <div>
      <body>
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

        <div className="edit-container">
          <div class="introduce">
            <div className="produce-headers">
              <img className="produce-header" src={produce} alt={produce}></img>
              <div className="produce-headerline">프로필 수정</div>
            </div>
            <ul className="introduce-somethings">
              <img className="introduce-profile" src={profile} alt={profile} />
              <div className="introduce-something">
                <img className="introduce-me" src={home} alt={home} />
                <div className="introduce-blue">이름 </div>{" "}
                <input className="write-name" />
              </div>
              <div className="introduce-something">
                <img className="introduce-me" src={home} alt={home} />
                <div className="introduce-blue">거주지 </div>{" "}
                <input className="write-home" />
              </div>
              <div className="introduce-something">
                <img className="introduce-me" src={job} alt={job} />
                <div className="introduce-blue">근무지 </div>{" "}
                <input className="write-job" />
                <button className="introduce-save">저장하기</button>
              </div>
              <div className="introduce-something">
                <img className="introduce-me" src={school} alt={school} />
                <div className="introduce-blue">학교 </div>{" "}
                <input className="write-school" />
              </div>
              <div className="introduce-something">
                <img className="introduce-me" src={hometown} alt={hometown} />
                <div className="introduce-blue">출신지 </div>
                <input className="write-hometown" />
              </div>
            </ul>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Profileedit;

import React from "react";
import { Link } from "react-router-dom";
import "./Myheader.css";

import profile from "../assets/profile.png";
import background from "../assets/background.jpg";
import camera from "../assets/camera.png";

const Myheader = () => {
  return (
    <div>
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
          <Link to="ProfileEdit">
            <p class="button1">프로필 수정</p>
          </Link>

          <div class="bottom">
            <ul class="navigation">
              <li>
                <div className="navigation-content">타임라인</div>
              </li>
              <li>
                <div className="navigation-content">정보</div>
              </li>
              <li>
                <div className="navigation-content">친구</div>
              </li>
              <li>
                <Link to="Picture">
                  <div className="navigation-content">사진</div>
                </Link>
              </li>
              <li>
                <div className="navigation-content">더보기</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myheader;

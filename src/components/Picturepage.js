import React from "react";
import profile from "../assets/profile.png";

import background from "../assets/background.jpg";
import camera from "../assets/camera.png";

import picturebook from "../assets/picturebook.png";
import pop4 from "../assets/pop4.PNG";
import pop5 from "../assets/pop5.PNG";
import pop6 from "../assets/pop6.PNG";
import pop7 from "../assets/pop7.PNG";

import "./Picturepage.css";

function Picturepage() {
  return (
    <div className="App">
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

        <div class="middle">
          <div class="layout">
            <div>
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
                  <img src={pop4} alt={pop4}></img>
                  <img src={pop5} alt={pop5}></img>
                  <img src={pop6} alt={pop6}></img>
                  <img src={pop7} alt={pop7}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Picturepage;

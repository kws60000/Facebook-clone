import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Myheader.css";

import profileImg from "../assets/profile.png";
import backgroundImg from "../assets/background.jpg";
import camera from "../assets/camera.png";

//입력값 변경 순서
//usestate로 입력값 전후 설정
// input의 value 값에 따른 scr 경로가 저장되는 함수 설정
// onChange와 함수 연결
//connect, 리듀서 등록
// connect 변수 등록

//출력값 변경 순서
// 리듀서를 변수로 설정하고 MAP함수 사용
// 버튼에 변경값 적용
const Myheader = () => {
  const [profile, setProfile] = useState("");
  const [background, setBackground] = useState("");

  //프로필사진 파일 선택 시 경로를 읽는 이벤트
  const onChangeProfile = (e) => {
    let profileReader = new FileReader();
    //FileReader 생성

    profileReader.onloadend = () => {
      //파일이 로딩이 되었을 때 진행함

      const profile64 = profileReader.result;
      if (profile64) {
        setProfile(profile64.toString());
      }
      //파일의 경로값을 변수로 저장하고 문자열화 함
    };
    if (e.target.files[0]) {
      profileReader.readAsDataURL(e.target.files[0]);
    }
    // 파일의 경로를 읽음
  };

  //배경사진 파일 선택 시 경로를 읽는 이벤트
  const onChangeBackground = (e) => {
    let backgroundReader = new FileReader();
    backgroundReader.onloadend = () => {
      const backgorund64 = backgroundReader.result;
      if (backgorund64) {
        setBackground(backgorund64.toString());
      }
    };
    if (e.target.files[0]) {
      backgroundReader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <div>
      <div class="container">
        <div class="wrap">
          <input
            id="background-picture-upload"
            type="file"
            onChange={onChangeProfile}
          />
          <label for="background-picture-upload">
            <img className="background-camera" src={camera} alt={camera} />
          </label>
          <button className="background-save">배경 저장</button>
          <input id="profile-picture-upload" type="file" />
          <label for="profile-picture-upload">
            <img className="profile-camera" src={camera} alt={camera} />
          </label>
          <button className="profile-save">프로필 저장</button>
          <img src={profileImg} class="photo" alt={profileImg}></img>
          <img src={backgroundImg} class="top" alt={backgroundImg}></img>
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

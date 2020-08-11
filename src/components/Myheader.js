import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addProfile } from "../modules/addImgProfile";
import { addBackground } from "../modules/addImgBackground";
import "./Myheader.css";

import camera from "../assets/camera.png";

const Myheader = ({
  addImgProfile,
  addImgBackground,
  onClickAddProfile,
  onClickAddBackground,
}) => {
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
        <div className="wrap">
          <input
            id="background-picture-upload"
            type="file"
            onChange={onChangeBackground}
          />

          <label for="background-picture-upload">
            <img className="background-camera" src={camera} alt={camera} />
          </label>

          <button
            type="button"
            className="background-save"
            onClick={() => {
              onClickAddBackground({
                background,
              });
            }}
          >
            배경 저장
          </button>

          <input
            id="profile-picture-upload"
            type="file"
            onChange={onChangeProfile}
          />

          <label for="profile-picture-upload">
            <img className="profile-camera" src={camera} alt={camera} />
          </label>

          <button
            type="button"
            className="profile-save"
            onClick={() => {
              onClickAddProfile({
                profile,
              });
            }}
          >
            프로필 저장
          </button>

          {addImgBackground.map((add) => (
            <img
              key={add.id}
              src={add.background}
              className="top"
              alt={"에러"}
            ></img>
          ))}

          {addImgProfile.map((add) => (
            <img
              key={add.id}
              src={add.profile}
              className="photo"
              alt={"에러"}
            ></img>
          ))}

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

const mapStateToProps = (state) => {
  return {
    addImgProfile: state.addImgProfile,
    addImgBackground: state.addImgBackground,
  };
};
// Store에 저장된 개인정보의 현재 상태를 Props로 가져온다.

const mapDispatchToProps = (dispatch) => ({
  onClickAddProfile: ({ profile }) => dispatch(addProfile({ profile })),
  onClickAddBackground: ({ background }) =>
    dispatch(addBackground({ background })),
});
// 프로필, 배경사진을 저장하는 버튼의 onClick 이벤트와 addName 액션을 연결한다.

export default connect(mapStateToProps, mapDispatchToProps)(Myheader);
// MyHeader 컴포넌트가 Store에 접근하게 만든다.

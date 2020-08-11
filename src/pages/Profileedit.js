import React, { useState } from "react";
import { connect } from "react-redux";
import { addName } from "../modules/addWho";
import "./Profileedit.css";

import profile from "../assets/profile.png";
import produce from "../assets/produce.png";
import homeImg from "../assets/home.png";
import jobImg from "../assets/job.png";
import hometownImg from "../assets/hometown.png";
import schoolImg from "../assets/school.png";
import Myheader from "../components/Myheader";

const Profileedit = ({ onClickWho }) => {
  const [name, setName] = useState("");
  const [home, setHome] = useState("");
  const [hometown, setHometown] = useState("");
  const [job, setJob] = useState("");
  const [school, setSchool] = useState("");
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeHome = (e) => {
    setHome(e.target.value);
  };
  const onChangeHometown = (e) => {
    setHometown(e.target.value);
  };
  const onChangeJob = (e) => {
    setJob(e.target.value);
  };
  const onChangeSchool = (e) => {
    setSchool(e.target.value);
  };
  return (
    <div>
      <body>
        <Myheader />

        <div className="edit-container">
          <div class="introduce">
            <div className="produce-headers">
              <img className="produce-header" src={produce} alt={produce}></img>
              <div className="produce-headerline">프로필 수정</div>
            </div>
            <ul className="introduce-somethings">
              <img className="introduce-profile" src={profile} alt={profile} />
              <div className="introduce-something">
                <img className="introduce-me" src={homeImg} alt={homeImg} />
                <div className="introduce-blue">이름 </div>{" "}
                <input
                  className="write-name"
                  value={name}
                  onChange={onChangeName}
                />
              </div>
              <div className="introduce-something">
                <img className="introduce-me" src={homeImg} alt={homeImg} />
                <div className="introduce-blue">거주지 </div>{" "}
                <input
                  className="write-home"
                  value={home}
                  onChange={onChangeHome}
                />
              </div>
              <div className="introduce-something">
                <img className="introduce-me" src={jobImg} alt={jobImg} />
                <div className="introduce-blue">근무지 </div>{" "}
                <input
                  className="write-job"
                  value={job}
                  onChange={onChangeJob}
                />
                <button
                  type="button"
                  className="introduce-save"
                  onClick={() => {
                    onClickWho({
                      whoId: Math.random(),
                      name,
                      home,
                      hometown,
                      job,
                      school,
                    });
                  }}
                >
                  저장하기
                </button>{" "}
              </div>
              <div className="introduce-something">
                <img className="introduce-me" src={schoolImg} alt={schoolImg} />
                <div className="introduce-blue">학교 </div>{" "}
                <input
                  className="write-school"
                  value={school}
                  onChange={onChangeSchool}
                />
              </div>
              <div className="introduce-something">
                <img
                  className="introduce-me"
                  src={hometownImg}
                  alt={hometownImg}
                />
                <div className="introduce-blue">출신지 </div>
                <input
                  className="write-hometown"
                  value={hometown}
                  onChange={onChangeHometown}
                />
              </div>
            </ul>
          </div>
        </div>
      </body>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    addWho: state.addWho,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClickWho: ({ whoId, name, home, hometown, job, school }) =>
    dispatch(addName({ whoId, name, home, hometown, job, school })),
});
// '작성하기' 버튼의 onClick 이벤트와 addName 함수를 연결한다.

export default connect(mapStateToProps, mapDispatchToProps)(Profileedit);

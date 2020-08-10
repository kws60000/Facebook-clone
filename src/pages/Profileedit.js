import React, { useState } from "react";
import { connect } from "react-redux";
import { addWho } from "../modules/addSome";
import "./Profileedit.css";

import profile from "../assets/profile.png";
import produce from "../assets/produce.png";
import home from "../assets/home.png";
import job from "../assets/job.png";
import hometown from "../assets/hometown.png";
import school from "../assets/school.png";
import Myheader from "../components/Myheader";

const Profileedit = ({ onClickWho }) => {
  const [name, setName] = useState("");
  const onChangeName = (e) => {
    setName(e.target.value);
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
                <img className="introduce-me" src={home} alt={home} />
                <div className="introduce-blue">이름 </div>{" "}
                <input
                  className="write-name"
                  value={name}
                  onChange={onChangeName}
                />
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
                <button
                  type="button"
                  className="introduce-save"
                  onClick={() => {
                    onClickWho({
                      id: Math.random(),
                      name,
                    });
                  }}
                >
                  저장하기
                </button>{" "}
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

const mapStateToProps = (state) => {
  return {
    addWho: state.addWho,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClickWho: ({ id, name }) => dispatch(addWho({ id, name })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profileedit);

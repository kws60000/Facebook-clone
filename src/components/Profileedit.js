import React from "react";
import "./Profileedit.css";

import profile from "../assets/profile.png";

import produce from "../assets/produce.png";
import home from "../assets/home.png";
import job from "../assets/job.png";
import hometown from "../assets/hometown.png";
import school from "../assets/school.png";
import Myheader from "./Myheader";

const Profileedit = () => {
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

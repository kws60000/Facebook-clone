import React from "react";
import Post from "./Post";

import produce from "../assets/produce.png";
import home from "../assets/home.png";
import job from "../assets/job.png";
import hometown from "../assets/hometown.png";
import school from "../assets/school.png";

import picturebook from "../assets/picturebook.png";
import pop5 from "../assets/pop5.PNG";
import pop6 from "../assets/pop6.PNG";
import pop7 from "../assets/pop7.PNG";

import "./Privatepage.css";
import Myheader from "./Myheader";

function Privatepage() {
  return (
    <div className="App">
      <body>
        <Myheader />

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

            <Post />
          </div>
        </div>
      </body>
    </div>
  );
}

export default Privatepage;

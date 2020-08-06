import React from "react";
import { connect } from "react-redux";

import picturebook from "../assets/picturebook.png";
import pop4 from "../assets/pop4.PNG";
import pop5 from "../assets/pop5.PNG";
import pop6 from "../assets/pop6.PNG";
import pop7 from "../assets/pop7.PNG";
import "./Picturepage.css";

import Myheader from "../components/Myheader";

function Picturepage({ addSome }) {
  return (
    <div className="App">
      <body>
        <Myheader />
        <div class="middle">
          <div class="layout">
            <div>
              <div className="Picturepage-Picture">
                <div class="pictures">
                  <div className="produce-headers">
                    <img
                      className="produce-header2"
                      src={picturebook}
                      alt={picturebook}
                    ></img>
                    <div className="produce-headerline">사진</div>
                  </div>
                  <p className="pictures3">
                    {addSome.map((post) => (
                      <img key={post.id} src={post.upPicture} alt={post}></img>
                    ))}

                    <img src={pop4} alt={pop4}></img>
                    <img src={pop5} alt={pop5}></img>
                    <img src={pop6} alt={pop6}></img>
                    <img src={pop7} alt={pop7}></img>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    addSome: state.addSome,
  };
};
export default connect(mapStateToProps)(Picturepage);

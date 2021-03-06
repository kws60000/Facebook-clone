import React from "react";

import picturebook from "../assets/picturebook.png";
import pop4 from "../assets/pop4.PNG";
import pop5 from "../assets/pop5.PNG";
import pop6 from "../assets/pop6.PNG";
import pop7 from "../assets/pop7.PNG";

const Picture = () => {
  return (
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
        <p className="pictures3">
          <img src={pop4} alt={pop4}></img>
          <img src={pop5} alt={pop5}></img>
          <img src={pop6} alt={pop6}></img>
          <img src={pop7} alt={pop7}></img>
        </p>
      </div>
    </div>
  );
};

export default Picture;

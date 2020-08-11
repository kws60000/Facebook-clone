import React, { useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../modules/addSome";
import "./Post.css";

import profile from "../assets/profile.png";
import like from "../assets/like.PNG";
import chatbox from "../assets/chatbox.PNG";
import share from "../assets/share.PNG";

const Post = ({ onClickAddPost, addSome, addWho }) => {
  const [upText, setUpText] = useState("");
  const [upPicture, setUpPicture] = useState("");

  const onChangeText = (e) => {
    setUpText(e.target.value);
  };

  const onChangePicture = (e) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setUpPicture(base64.toString());
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div>
      <div class="right">
        <div class="makepost">
          <form id="post-status" class="fb-box">
            <div id="status-content">
              <img src={profile} alt={profile} />

              <input
                className="input-upText"
                type="text"
                value={upText}
                onChange={onChangeText}
                placeholder="무슨 생각을 하고 계신가요?"
              />
            </div>
            <div id="status-photo">
              <span class="status-photo-span">
                <input
                  id="picture-upload"
                  type="file"
                  onChange={onChangePicture}
                />
                <label for="picture-upload" className="custom-file-upload">
                  사진추가
                </label>
              </span>
              <span class="status-photo-span">
                <input id="video-upload" type="file" />
                <label for="video-upload" className="custom-file-upload">
                  동영상추가
                </label>
              </span>
            </div>

            <div id="status-action">
              <div id="status-button">
                <button
                  type="button"
                  onClick={() => {
                    onClickAddPost({
                      upText,
                      upPicture,
                    });
                  }}
                  class="button-hover"
                >
                  게시
                </button>
              </div>
            </div>
          </form>
        </div>
        {addSome.map((post) => (
          <article key={post.id}>
            <div class="timeline-post">
              <div class="user-post fb-box">
                <div class="user-post-title">
                  <div className="post-title-profile">
                    <img src={profile} alt={profile} />
                  </div>
                  <span>
                    {addWho.map((who) => (
                      <div key={who.whoId}>{who.name}</div>
                    ))}
                  </span>
                  <span>
                    1시간 전 <i class="fa fa-globe" aria-hidden="true"></i>{" "}
                  </span>
                </div>
                <div className="upText">{post.upText}</div>
                <img
                  className="upPicture"
                  src={post.upPicture}
                  alt={upPicture}
                ></img>

                <div class="user-post-content"></div>

                <div class="box-buttons">
                  <div class="row">
                    <button>
                      <img src={like} alt={like} />
                    </button>
                    <button>
                      <img src={chatbox} alt={chatbox} />
                    </button>
                    <button>
                      <img src={share} alt={share} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    addSome: state.addSome,
    addWho: state.addWho,
    // Store에 저장된 개인정보의 현재 상태를 Props로 가져옴
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClickAddPost: ({ id, upText, upPicture }) =>
    dispatch(addPost({ id, upText, upPicture })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);

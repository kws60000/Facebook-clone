import profileImg from "../assets/profile.png";

export const ADDPROFILE = "addImgProfile/ADDPROFILE";

let id = 1;

// 프로필 사진을 변경하는 액션 생성 함수
export const addProfile = (id, profile) => ({
  type: ADDPROFILE,
  id,
  profile,
});

// state의 초깃값 설정
const initialState = [
  {
    id,
    profile: profileImg,
  },
];

export default function addImgProfile(state = initialState, action) {
  switch (action.type) {
    case ADDPROFILE:
      const result = [
        ...state,
        {
          id: id++,
          profile: action.profile,
        },
      ];
      if (result.length > 1) {
        result.shift();
      }
      return result;

    default:
      return state;
  }
}

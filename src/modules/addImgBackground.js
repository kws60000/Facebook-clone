import backgroundImg from "../assets/background.jpg";

export const ADDBACKGROUND = "addImgBackground/ADDBACKGROUND";

let id = 1;

// 배경사진을 변경하는 액션 생성 함수
export const addBackground = ({ background }) => ({
  type: ADDBACKGROUND,
  background,
});

// state의 초깃값 설정
const initialState = [
  {
    background: backgroundImg,
  },
];

export default function addImgBackground(state = initialState, action) {
  switch (action.type) {
    case ADDBACKGROUND:
      const result = [
        ...state,
        {
          id: id++,
          background: action.background,
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

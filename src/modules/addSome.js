export const ADDPOST = "addSome/ADDPOST";

let id = 1;
//id의 초기 값을 1로 설정합니다.

export const addPost = ({ upText, upPicture }) => ({
  type: ADDPOST,
  upText,
  upPicture,
});

export default function addSome(state = [], action) {
  switch (action.type) {
    case ADDPOST:
      return [
        ...state,
        {
          id: id++,
          // 액션이 발생할 때 마다 id의 값이 1씩 증가합니다.

          upText: action.upText,
          upPicture: action.upPicture,
        },
      ];

    default:
      return state;
  }
}

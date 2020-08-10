export const ADDPOST = "addSome/ADDPOST";
export const ADDWHO = "addSome/ADDWHO";

export const addPost = ({ id, upText, upPicture }) => ({
  type: ADDPOST,
  id,
  upText,
  upPicture,
});

export const addWho = ({ id, name }) => ({
  type: ADDWHO,
  id,
  name,
});

export default function addSome(state = [], action) {
  switch (action.type) {
    case ADDPOST:
      return [
        ...state,
        {
          id: action.id,
          upText: action.upText,
          upPicture: action.upPicture,
        },
      ];
    case ADDWHO:
      const result = [
        ...state,
        {
          id: action.id,
          name: action.name,
        },
      ];
      // 1. 반환하고자 하는 데이터를 변수에 저장

      if (result.length > 1) {
        result.shift();
      }
      // 2. 프로필이 두 개 이상일 때 어레이 앞의 아이템을 없앤

      return result;
    // 3. 갱신된 데이터를 반환

    default:
      return state;
  }
}

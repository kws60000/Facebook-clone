export const ADDNAME = "addName/ADDWHO";

export const addName = ({ whoId, name }) => ({
  type: ADDNAME,
  whoId,
  name,
});

export default function addWho(state = [], action) {
  switch (action.type) {
    case ADDNAME:
      const result = [
        ...state,
        {
          whoID: action.whoID,
          name: action.name,
        },
      ];
      // 1. 반환하고자 하는 데이터를 변수에 저장

      if (result.length > 1) {
        result.shift();
      }
      // 2. 프로필이 두 개 이상일 때 어레이 앞의 아이템을 지움

      return result;
    // 3. 갱신된 데이터를 반환

    default:
      return state;
  }
}

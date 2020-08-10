export const ADDNAME = "addName/ADDWHO";

export const addName = ({
  whoId,
  name,
  home,
  hometown,
  job,
  school,
  profile,
  background,
}) => ({
  type: ADDNAME,
  whoId,
  name,
  home,
  hometown,
  job,
  school,
  profile,
  background,
});
// ADDNAME 액션은 id, 이름, 거주지, 직업, 출신지, 학교, 프로필 사진, 배경사진값을 변수로 사용한다.

export default function addWho(state = [], action) {
  switch (action.type) {
    case ADDNAME:
      const result = [
        ...state,
        {
          whoID: action.whoID,
          name: action.name,
          home: action.home,
          hometown: action.hometown,
          job: action.job,
          school: action.school,
          profile: action.profile,
          background: action.background,
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

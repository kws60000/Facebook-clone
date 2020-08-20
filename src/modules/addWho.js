export const ADDNAME = "addName/ADDWHO";

let whoId = 1;
export const addName = ({ name, home, hometown, job, school }) => ({
  type: ADDNAME,
  name,
  home,
  hometown,
  job,
  school,
});

// state의 초깃값 설정
const initialState = [
  {
    whoId,
    name: "김우석",
    home: "제주도",
    hometown: "부산",
    job: "교육생",
    school: "제주대",
  },
];

// ADDNAME 액션은 id, 이름, 거주지, 직업, 출신지, 학교를 변수로 사용한다.
export default function addWho(state = initialState, action) {
  switch (action.type) {
    case ADDNAME:
      const result = [
        ...state,
        {
          whoId: whoId++,
          name: action.name,
          home: action.home,
          hometown: action.hometown,
          job: action.job,
          school: action.school,
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

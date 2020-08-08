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
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
        },
      ];
    default:
      return state;
  }
}

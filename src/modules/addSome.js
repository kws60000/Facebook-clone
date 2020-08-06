export const ADDPOST = "addSome/ADDPOST";

export const addPost = ({ id, upText, upPicture }) => ({
  type: ADDPOST,
  id,
  upText,
  upPicture,
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
    default:
      return state;
  }
}

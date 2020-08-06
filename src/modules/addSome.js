export const ADDPOST = "addSome/ADDPOST";

export const addPost = ({ id, upText }) => ({
  type: ADDPOST,
  id,
  upText,
});

export default function addSome(state = [], action) {
  switch (action.type) {
    case ADDPOST:
      return [
        ...state,
        {
          id: action.id,
          upText: action.upText,
        },
      ];
    default:
      return state;
  }
}

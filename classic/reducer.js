const CHANGE_TO_GREEN = "GHANGE_TO_GREEN";
const CHANGE_TO_YELLOW = "CHANGE_TO_YELLOW";
const CHANGE_TO_RED = "CHANGE_TO_RED";

const initState = {
  color: "green"
};

export default function light(state = initState, action) {
  switch (action.type) {
    case CHANGE_TO_GREEN:
      
      return {
        ...state,
        color: "green"
      };

    case CHANGE_TO_YELLOW:
      return {
        ...state,
        color: "yellow"
      };

    case CHANGE_TO_RED:
      return {
        ...state,
        color: "red"
      };

    default:
      return state;
  }
}

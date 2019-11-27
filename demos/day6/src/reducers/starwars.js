import produce from "immer"

const initialState = {};

// state -> state with new message
export default function reducer(state = initialState, action) {
  // ANY CHANGE IN THE SYSTEM WILL GO THROUGH HERE

  switch(action.type) {
    case 'CHARACTER_DATA_READY':
      return action.payload;

    default:
      return state;
  }
}


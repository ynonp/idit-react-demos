import { createStore } from 'redux'
import produce from "immer"

/*
   1. Each user should be able to "post" a new message
   2. Users can search messages by author
   3. Users can see n recent messages
*/

const initialState = {
  messages: [
    { id: 0, user: 'ynon', text: 'nice to see you' },
    { id: 1, user: 'demo', text: 'hello' },
  ],
};

// state -> state with new message
function reducer(state = initialState, action) {
  console.log('Reducer: ', action);
  switch(action.type) {
    case 'ADD_MESSAGE':
      return addMessage(state, action.payload);

    case 'DELETE_MESSAGE':
      return deleteMessage(state, action.payload);

    default:
      return state;
  }
}

// action.payload = { text: 'hello', user: 'ynon' }
// state = { messages: [ ... ] }
function addMessage(state, { text, user }) {
  const maxId = state.
    messages.
    map(m => m.id).
    reduce((acc, val) => val > acc ? val : acc);
  const newId = maxId + 1;

  return  produce(state, draft => {
    draft.messages.push({
      text, user, id: newId,
    });
  })

  /*
  return {
    ...state,
    messages: [
      ...state.messages,
      { id: newId, user, text },
    ],
  };
  */
}

// payload: { id }
function deleteMessage(state, { id }) {
  return  produce(state, draft => {
    draft.messages = draft.messages.filter(
      msg => msg.id !== id
    )
  });
}

window.globalStore = createStore(reducer);
export default window.globalStore

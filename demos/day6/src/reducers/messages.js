import produce from "immer"

/*
   1. Each user should be able to "post" a new message
   2. Users can search messages by author
   3. Users can see n recent messages
*/

const initialState = [
  { id: 0, user: 'ynon', text: 'nice to see you' },
  { id: 1, user: 'demo', text: 'hello' },
];

// state -> state with new message
export default function reducer(state = initialState, action) {
  // ANY CHANGE IN THE SYSTEM WILL GO THROUGH HERE

  switch(action.type) {
    case 'ADD_MESSAGE':
      return addMessage(state, action.payload);

    case 'DELETE_MESSAGE':
      return deleteMessage(state, action.payload);

    /*
    case 'CHARACTER_DATA':
      return addMessage(state, { type: 'ADD_MESSAGE', payload: '...' })
    */

    default:
      return state;
  }
}

function calcMaxId(state) {
  if (state.length === 0) {
    return 0;
  }

  return state.
    map(m => m.id).
    reduce((acc, val) => val > acc ? val : acc);
}
// action.payload = { text: 'hello', user: 'ynon' }
// state = { messages: [ ... ] }
function addMessage(state, { text, user }) {
  const maxId = calcMaxId(state);
  const newId = maxId + 1;

  return  produce(state, draft => {
    draft.push({
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
  return state.filter(msg => msg.id !== id);
}



import { createStore, applyMiddleware } from 'redux'
import produce from "immer"
import thunk from 'redux-thunk';

/*
   1. Each user should be able to "post" a new message
   2. Users can search messages by author
   3. Users can see n recent messages
*/

const loggerMiddleware = ({ dispatch, getState }) => next => action => {
  console.log('Reducer: ', action);
  return next(action);
}

const noBadWordsMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === 'ADD_MESSAGE') {
    action.payload.text = action.payload.text.replace('angular', 'react');
  }
  return next(action);
}

const pastStates = [];
const undoMiddleware = ({ dispatch, getState }) => next => action => {
  if ( action.type === 'undo' && pastStates.length > 0 ) {
    return dispatch({
      type: 'RESET_STATE',
      payload: pastStates.pop()
    });
  }

  if (action.type !== 'RESET_STATE') {
    pastStates.push(getState());
  }
  return next(action);
}

const initialState = {
  messages: [
    { id: 0, user: 'ynon', text: 'nice to see you' },
    { id: 1, user: 'demo', text: 'hello' },
  ],
  starwarsCharacter: {},
};

// state -> state with new message
function reducer(state = initialState, action) {
  // ANY CHANGE IN THE SYSTEM WILL GO THROUGH HERE

  switch(action.type) {
    case 'ADD_MESSAGE':
      return addMessage(state, action.payload);

    case 'DELETE_MESSAGE':
      return deleteMessage(state, action.payload);

    case 'CHARACTER_DATA_READY':
      return characterDataReady(state, action.payload);

    case 'RESET_STATE':
      return action.payload;

    default:
      return state;
  }
}

function calcMaxId(state) {
  if (state.messages.length === 0) {
    return 0;
  }

  return state.
    messages.
    map(m => m.id).
    reduce((acc, val) => val > acc ? val : acc);
}
// action.payload = { text: 'hello', user: 'ynon' }
// state = { messages: [ ... ] }
function addMessage(state, { text, user }) {
  const maxId = calcMaxId(state);
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

function characterDataReady(state, data) {
  return  produce(state, draft => {
    draft.starwarsCharacter = data;
  });
}

window.globalStore = createStore(
  reducer,
  applyMiddleware(loggerMiddleware, noBadWordsMiddleware, thunk, undoMiddleware));

export default window.globalStore

import messagesReducer from './messages';
import starwarsReducer from './starwars';

const initalState = {
  messages: messagesReducer(null, { type: '@@INIT' }),
  starwarsCharacter: starwarsReducer(null, { type: '@@INIT' }),
};

export default function reducer(state = initalState, action) {
  // ENTRY POINT - EACH EVENT GOES THROUGH HERE
  return {
    messages: messagesReducer(state.messages, action),
    starwarsCharacter: starwarsReducer(state.starwarsCharacter, action),
  };
}


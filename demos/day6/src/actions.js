import $ from 'jQuery';

export function addMessage(user, text) {
  return { type: 'ADD_MESSAGE', payload: { user, text } };
}

export function deleteMessage(id) {
  return { type: 'DELETE_MESSAGE', payload: { id } }
}

export function readRemoteData(id) {  
  return function(dispatch, getState) {
    dispatch(addMessage('SYSTEM', 'Starting to fetch data'));
    $.getJSON(`https://swapi.co/api/people/${id}/`, function(data) {
      dispatch({ type: 'CHARACTER_DATA_READY', payload: data });
    });
  }
}

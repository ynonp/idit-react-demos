export function addMessage(user, text) {
  return { type: 'ADD_MESSAGE', payload: { user, text } };
}

export function deleteMessage(id) {
  return { type: 'DELETE_MESSAGE', payload: { id } }
}



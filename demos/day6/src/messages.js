import React from 'react';
import { connect } from 'react-redux';
import { deleteMessage } from './actions';

function Messages(props) {
  const { messages, dispatch } = props;

  function deleteMe(id) {
    dispatch(deleteMessage(id));
  }

  return (
    <ul>
      {messages.map(msg => (
        <li key={msg.id}>
          <b>{msg.user}</b> - {msg.text}
            <button onClick={() => deleteMe(msg.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
  };
};

export default connect(mapStateToProps)(Messages);

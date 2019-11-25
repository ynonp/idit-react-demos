import React from 'react';
import { connect } from 'react-redux';

function Messages(props) {
  const { messages } = props;

  return (
    <ul>
      {messages.map(msg => (
        <li><b>{msg.user}</b> - {msg.text}</li>
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

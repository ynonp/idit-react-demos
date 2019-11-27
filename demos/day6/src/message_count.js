import React from 'react';
import { connect } from 'react-redux';

function MessageCount(props) {
  const { count } = props;

  return <p>You have {count} messages</p>
}

function mapStateToProps(state) {
  return {
    count: state.messages.length,
  };
}

export default connect(mapStateToProps)(MessageCount);

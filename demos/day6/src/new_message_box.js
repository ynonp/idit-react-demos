import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addMessage } from './actions';

function NewMessageBox(props) {
  const [username, setUsername] = useState('');
  const [text, setText] = useState('');
  const { dispatch } = props;

  function undo() {
    dispatch({ type: 'undo' });
  }

  function add() {
    dispatch(addMessage(username, text));
    setText('');
  }

  return (
    <div>
      <button onClick={undo}>Undo</button>
      <div>        
        <label>
          User name
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value) }
            />
        </label>
      </div>

      <div>
        <label>
          Message Text
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value) }
          />
        </label>
      </div>

      <button onClick={add} type="button">Add</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(NewMessageBox);

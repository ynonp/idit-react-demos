// Higher Order Component
//
import React from 'react';

function withTextChangeCount(ReactComponent) {
  return class WithTextChangeCount extends React.Component {
    constructor(props) {
      super(props);
      this.state = { text: 'change me...', count: 0 };
    }

    setTextAncIncChangeCount(val) {
      this.setState({
        text: val,
        count: this.state.count + 1,
      });
    }

    render() {
      const { text, count } = this.state;
      return (
        <ReactComponent
        count={count}
        text={text}
        setTextAncIncChangeCount={this.setTextAncIncChangeCount.bind(this)}
        />
      )
    }
  }
}

class HelloWorld extends React.Component {
  render() {
    const { count, text, setTextAncIncChangeCount } = this.props;
    return (
      <div>
        <h1>A first component</h1>
        <p>You changed the text {count} times</p>
        <input
          type="text"
          value={text}
          onChange={(e) => setTextAncIncChangeCount(e.target.value)}
        />
      </div>
    )
  }
}

export default withTextChangeCount(HelloWorld);

import React from 'react';

/*
 * useState - Constructor that creates a this.state
 * useEffect
 * React.memo
 */
import _ from 'lodash';

class Score extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value } = this.props;

    if (value % 2 === 1) {
      throw new Exception('hahaha');
    }

    return (
      <p>Your score is: {value}</p>
    )
  }
}


function Square(props) {
  const { winner, onClick } = props;
  const style = {
    width: '20px',
    height: '20px',
    display: 'inline-block',
    margin: '10px',
    background: winner ? 'red' : 'grey',
  };

  return (
    <div style={style} onClick={onClick} />
  );
}

export default class RedSpotter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      redIndex: _.random(1, 10),
      lastPlayTime: Date.now(),
    }

    this.win = this.win.bind(this);
    this.lose = this.lose.bind(this);
  }

  componentDidMount() {
    // called automatically when this component
    // enters the page
  }

  componentWillUnmount() {
    // called automatically when this component
    // leaves the page
  }

  componentDidUpdate(prevProps, prevState) {
    // called automatically when this component
    // "changes"
  }

  win() {
    this.setState({
      score: this.state.score + 8,
      redIndex: _.random(1, 10)
    });
  }

  lose() {
    this.setState({
      score: this.state.score - 5,
      redIndex: _.random(1, 10)
    });
  }

  componentDidCatch(error, info) {
    alert('sorry, bad score');
    this.setState({ score: 0 });
  }  

  render() {
    const { score, redIndex } = this.state;
    return (
      <div>
        <Score value={score} />
        {
          _.range(1, 11).map(idx => (
            <Square
              winner={idx === redIndex}
              onClick={idx === redIndex ? this.win : this.lose }
            />
          ))
        }
      </div>
    );
  }
}


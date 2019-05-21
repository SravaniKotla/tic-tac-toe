import React, { Component } from 'react'
import Board from '../board/Board';
import { calculateWinner } from '../../helpers/calculateWinner';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }


  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Move #' + move : <div className="newGame">New Game</div>;
      return (
        <li key={move}>
          <button className="moves-button" onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;

    if (winner) {
      status = <div className="winner">Winner : {winner}</div>
    } else {
      if (this.state.stepNumber === 9) {
        status = <div className="tie">It's a Draw</div>;
      } else {
        status = <div className="player">Player : {this.state.xIsNext ? 'X' : 'O'} </div>;
      }

    }

    return (
      <div className="game">
        <div className="game-board">

          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <ul className="moves">{moves}</ul>
        </div>
      </div>
    )
  }
}

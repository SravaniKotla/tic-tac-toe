import React, { Component } from 'react'
import Board from './Board';
import GameStatus from './GameStatus';
import {calculateWinner} from '../helpers/calculateWinner';

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
              'Go to move #' + move : 'Start New Game' ;
            return (
              <li key={move}>
                <button onClick={() => this.jumpTo(move)}>{desc}</button>
              </li>
            );
          });
    
        let status;
        
        if (winner) {
          status = 'Winner: ' + winner;
        } else {
            if(this.state.stepNumber===9){
                status = 'Its a tie';
            }else{
            status = 'Player: ' + (this.state.xIsNext ? 'X' : 'O');
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
          <GameStatus status={status} moves={moves}/>
        </div>
      </div>
    )
  }
}
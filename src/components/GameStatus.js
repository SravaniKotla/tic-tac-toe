import React from 'react';
import PropTypes from 'prop-types';

const GameStatus = (props)=>{
  
    return (
        <div className="game-info">
        <div>{props.status}</div>
        <ul>{props.moves}</ul>
      </div>
    )
  }
  GameStatus.propTypes = {   
    status: PropTypes.string,
    moves: PropTypes.array
  }
    ;
export default GameStatus;

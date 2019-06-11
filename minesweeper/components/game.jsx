import * as Minesweeper from "../minesweeper";
import React from 'react';
import Board from './board';

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    let board = new Minesweeper.Board(9, 5);
    this.state = {
        board: board
    }
    this.updateGame = this.updateGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  restartGame(){
    let board = new Minesweeper.Board(9, 5);
    this.setState({ board: this.state.board })
  }

  updateGame(tile, flagged){
      if (flagged){
          tile.toggleFlag();
      } else {
          tile.explore();
      }
      this.setState({ board: this.state.board })
  } 

  render () {
    let modalContent;
    let modalText;
    if (this.state.board.lost()){
      modalText = "you lost";
    } else if (this.state.board.won()){
      modalText = "you won";
    }

    if (this.state.board.lost() || this.state.board.won()){
      modalContent = (
        <div className="modal-screen">
          <div className="modal-content">
            <p>{modalText}</p>
            <button onClick={this.restartGame}>Play Again</button>
          </div>
        </div>);
    }
    

    return (
        <div>
          {modalContent}
          <Board 
          board={this.state.board}
          updateGame={this.updateGame}
          />
        </div>
    );
  }

}
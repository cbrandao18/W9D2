import React from 'react';
import Tile from './tile';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  renderRows(){
    return this.props.board.grid.map((row, rowIndex)=> {
      return (
        <div 
          className="row" 
          key={`row-${rowIndex}`}>
          {this.renderTiles(row, rowIndex)}
        </div>
      );
    })
  }

  renderTiles(row, rowIndex){
    return row.map( (tile, tileIndex)=>{
      return (<Tile 
        key={`row-${rowIndex}-tile-${tileIndex}`}
        tile={tile}
        updateGame={this.props.updateGame}
        />);
    })
  }

  render() {
    // let board = this.props.board;
    // let rows = board.grid.map( (row, i) => {
    //   return (
    //     <div className="row" key={`row-${i}`}>{
    //       row.map( (tile, j) => {
    //         return <Tile 
    //           key={`tile-${j}`}
    //           tile={tile}
    //           updateGame={this.props.updateGame}/>
    //       })
    //     }</div>
    //   );
    // })
    return (
        <div className="board"> 
          {this.renderRows()}
        </div>
    );
  }
}
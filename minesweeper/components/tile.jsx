import React from 'react';

export default class Tile extends React.Component{
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        event.preventDefault();
        let flagged = false;
        if (event.altKey){
            flagged = true;
        }
        this.props.updateGame(this.props.tile, flagged);
    }

    render(){
        let tile = this.props.tile;
        let text = "";
        let cssClass = "tile";

        if (tile.bombed && tile.explored){
            text = "\u2622" // BOMB UNICODE
            cssClass += " bombed";
        } else if (tile.explored){
            let bombCount = tile.adjacentBombCount();
            if (bombCount !== 0){
                text = bombCount;
            }
            cssClass += " explored";
        } else if (tile.flagged){
            text = "\u2691" // FLAGGED UNICODE
            cssClass += " flagged";
        }

        return (
            <div 
                className={cssClass}
                onClick={this.handleClick}>
                {text}
            </div>
        );
    } 
}
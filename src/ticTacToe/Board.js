import React from "react";
import Square from './Square';

class Board extends React.Component{

    renderSquare(i) {
        console.info(this.props)
        const col = [0, 1, 2]
        return(
            col.map((item) => {
                const cur = i * 3 + item
                console.info('1111', this.props.winnerArr.includes(cur))
                return <Square 
                key={cur.toString()}
                className={this.props.winnerArr.includes(cur) ? 'win' : ''}
                value={this.props.squares[cur]} 
                onClick={() => this.props.onClick(cur)}
                />
            })
        )
    }
    renderRow() {
        const box = [0, 1, 2]
        return (
            box.map((i) => {
                return (
                    <div className="board-row" key={i.toString()}>
                        {this.renderSquare(i)}
                    </div>)
            })
        )
    }
    render() {
        return (
            <div>
               {this.renderRow()}
            </div>
        )
    }
}

export default Board;
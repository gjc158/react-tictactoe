import React from "react";
import Board from "./Board";

class Game extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null),
                    currentNumber: -1 // 第几个格子
                }
            ],
            xIsNext: true,
            stepNumber: 0, // 当前历史步骤
            sort: false, // false 升序 true 降序
            winnerArr: []
        }
    }
    handleSort() {
        this.setState({
            sort: !this.state.sort
        })
    }
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        })
    }
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length -1]
        const squares = current.squares.slice();
        const result = calculateWinner(squares)
        if (result.winner || squares[i]) {
            console.info(result)
            this.setState({
                winnerArr: result.arr
            })
            return;
          }
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({
            history: history.concat([{
                squares: squares,
                currentNumber: i
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        })
    }
    componentDidMount() {
        // 挂载
    }
    componentWillUnmount() {
        // 卸载
    }

    render() {
        const sortDesc = this.state.sort ? '当前升序' : '当前降序'
        const history = this.state.history
        const current = history[this.state.stepNumber]
        const result = calculateWinner(current.squares)
        const winner = result.winner
        const winnerArr = result.arr
        const moves = history.map((step, move) => {
            const desc = move? 'Go to move #' + move : 'Go to game start'
            const num = move ? step.currentNumber : -1
            let row, col // 几行几列
            if(move) {
                row = parseInt(num / 3) + 1
                col = num % 3 + 1
            } else {
                row = '-'
                col = '-'
            }
            return (
                <li key={move}>
                    <button className={ this.state.stepNumber === move ? 'bolder':''} onClick={() => this.jumpTo(move)}>
                        { desc } {move ? '('+row+'行,' + col +'列)' : '(-,-)'}
                    </button>
                </li>
            )
        })
        let status;
        if(winner) {
            status = 'winner: ' + winner
        } else {
            if(current.squares.length === 9 && this.state.stepNumber === 9) {
                status = 'Nobody win'
            } else {
                status = 'Next player: ' + (this.state.xIsNext ? 'X' : '0')
            }
        }
        const sort = this.state.sort
        return (
            <div className="game">
                <div className="game-board">
                    <Board 
                        winnerArr={winnerArr}
                        squares = {current.squares}
                        onClick={ (i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <button onClick={() => this.handleSort()}>{sortDesc}</button>
                    <div>{sort?moves:moves.reverse()}</div>

                </div>
            </div>
        )
    }
}
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return {
            winner: squares[a],
            arr: lines[i]
        }
      }
    }
    return {
        winner: null,
        arr: []
    };
}

export default Game

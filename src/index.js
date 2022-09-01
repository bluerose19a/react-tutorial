import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//game>>board>>square
//squareコンポーネントは1つのボタンをレンダー
//Board（盤面）が 9 個のマス目をレンダー
//Game コンポーネントは盤面と、後ほど埋めることになるプレースホルダーを描画


class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <button
                className="square"
                onClick={() => this.setState({ value: 'X' })}
            >
                //Xとかのvalueを表示する
                {this.state.value}  
            </button>
        );
    }
}

class Board extends React.Component {
    constractor(props){
        super(props);
        this.state = {
            Squares: Array(9).fill(null),
        };
    }
    renderSquare(i) {
        return <Square value={this.state.squares[i]} />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

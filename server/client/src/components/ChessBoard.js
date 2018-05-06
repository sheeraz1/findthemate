import React, { Component } from 'react';
import {Button, Row, Container} from 'reactstrap';
import ChessDiagram from 'react-chessground';
import {connect} from 'react-redux';
import '../App.css';
import '../chessground.css';
import 'react-chessground/dist/styles/chessground.css'
import {SOLVED_PUZZLE, SET_CURRENT_PUZZLE} from '../actions/types';

var GameTree = require('./GameTree')
var Chess = require('chess.js');

class ChessBoard extends Component {
    constructor(props){
        console.log('constructor called');
        super(props);
        this.state = {
            fen : '//',
        }
        this.chess = new Chess();
        this.solutionsTree = new GameTree();
        if(props.puzzle){
            this.chess.load(props.puzzle.fen);
            this.state.fen = props.puzzle.fen;
            this.state.id = props.puzzle.id;
            this.state.solutions = props.puzzle.solutions;
            this.solutionsTree.createSolutionsTree(props.puzzle.solutions);
        }
        
        this.onMove = this.onMove.bind(this);
        this.makeComputerMove = this.makeComputerMove.bind(this);
        this.finished_game = false;
    }

    componentWillReceiveProps(props){
        
     }

   
    onMove = (from, to) => {
        const oldfen = this.state.fen;
        var i = this.solutionsTree.isCorrectMove(from+to);
        console.log(i);
        if (i != -1){
            this.solutionsTree.goForward(i);
            this.chess.move({ from, to, promotion: 'q' });
            this.setState({
                fen: this.chess.fen(),
            });
            if (!this.chess.in_checkmate())
                setTimeout(this.makeComputerMove,1000);
            else{
                console.log('checkmate');
                console.log(this.props.puzzle);
                this.props.solved_puzzle(this.props.puzzle.id);
                for(var i=0; i<this.props.puzzles.length; i++){
                    var puzzle = this.props.puzzles[i];
                    if (!this.props.user.solved[puzzle._id]){
                        this.props.setPuzzle(puzzle._id,puzzle.fen, puzzle.solutions);
                        break;
                    }
                }
            }

        }
        else {
            setTimeout(this.setState({
                fen: oldfen,
            }),500);
        }
      }
    
    makeComputerMove(){
        const move = this.solutionsTree.currentNode.children[0].move;
        const from = move.substring(0,2);
        const to = move.substring(2,4);
        this.solutionsTree.goForward(0);
        this.chess.move({from,to,promotion: 'q'});
        this.setState({
            fen: this.chess.fen(),
        })

    }


    render(){
        return (
                <Row>
                    <div className="col-6">
                        <ChessDiagram draggable={{enabled : false}} fen={this.state.fen} onMove={this.onMove} />
                    </div>
                    <div className="col-6">
                        <div clasName="button-container">
                            <Button width="200" className="info-button">Next Puzzle</Button>
                        </div>
                        <div clasName="button-container">
                            <Button className="info-button">Display Puzzle Fen</Button>
                        </div>
                        <div clasName="button-container">
                            <Button className="info-button">Open In Lichess</Button>
                        </div>
                    </div>
                </Row>
        );
    };


}


function mapStateToChessBoardProps(state){
    return {
        puzzle : state.currentPuzzle,
        user : state.user,
        puzzles: state.puzzles,
    }
}


function mapDispatchToAppProps(dispatch){
    return {
        solved_puzzle : (id) => {
            console.log('id is solved');
            dispatch({
                type : SOLVED_PUZZLE,
                id : id,
            })
        },
        setPuzzle: (id,fen,solutions) => {
            dispatch({
                type : SET_CURRENT_PUZZLE,
                id : id,
                fen : fen,
                solutions : solutions
            });
        },
        
    }

}
export default connect(mapStateToChessBoardProps, mapDispatchToAppProps)(ChessBoard);
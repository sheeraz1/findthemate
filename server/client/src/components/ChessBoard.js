
import {SOLVED_PUZZLE, SET_CURRENT_PUZZLE} from '../actions/types';
import axios from 'axios';

/*assets/css*/
import '../App.css';
import '../chessground.css';
import 'react-chessground/dist/styles/chessground.css'
import tickIcon from '../baseline-done-24px.svg';

/*components*/
import React, { Component } from 'react';
import {Button, Container,Row,Col} from 'reactstrap';
import ChessDiagram from 'react-chessground';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
var GameTree = require('./GameTree')
var Chess = require('chess.js');

/*reducer*/


class ChessBoard extends Component {
    constructor(props){
        console.log('constructor called');
        super(props);
        this.whiteInitial = "White To Move";
        this.blackInitial = "Black To Move";
        var width = window.innerWidth;
        var height = window.innerHeight;
        var minWidthHeight = (width < height) ? width : height;
        var boardDim = window.innerHeight < window.innerWidth ? window.innerHeight * 0.7 : window.innerWidth * 0.7;
        
        this.setState({
            boardDim : (minWidthHeight * .7),
        });

        this.chess = new Chess();
        this.solutionsTree = new GameTree();
        var whiteMove = true;
        if(props.user){
            console.log('In constructor: we have a user');
            var currentPuzzle = props.user.currentPuzzle;

            if(props.puzzles){
                console.log('In constructor: we have puzzles');
                console.log('current puzzle:');
                console.log(currentPuzzle);
                for(var i=0; i<props.puzzles.length; i++){
                    var puzzle = props.puzzles[i];
                    if (puzzle._id === currentPuzzle.id){
                        this.currentPuzzleIndex = i;
                        console.log('we set currentpuzzle index to ' + this.currentPuzzleIndex);
                        break;
                    }
                }
            }
            this.chess.load(currentPuzzle.fen);
            if (this.chess.turn() === 'b'){
                
                whiteMove = false;
            }
            this.solutionsTree.createSolutionsTree(currentPuzzle.solutions);
        }
        

        this.state = {
            no_move_made:true,
            fen : currentPuzzle ? currentPuzzle.fen : "//",
            white : whiteMove,
            finished_game : false,
            viewOnly:false,
            currentPuzzle: currentPuzzle,
            showFen: false,
            lastMove:[]
        }
        
        this.onMove = this.onMove.bind(this);
        this.makeComputerMove = this.makeComputerMove.bind(this);
        this.setNexPuzzle=this.setNexPuzzle.bind(this);
    }

    componentWillReceiveProps(props){
        console.log('will receive props called');
        if (props.user){
            if (props.user.currentPuzzle){
                
                if (props.user.currentPuzzle !== this.state.currentPuzzle){
                    
                    this.solutionsTree = new GameTree();
                    this.solutionsTree.createSolutionsTree(props.user.currentPuzzle.solutions);
                    this.chess.load(props.user.currentPuzzle.fen);
                    var white = true;
                    if (this.chess.turn() === 'b'){
                        white = false;
                    }
                    this.setState({
                        white : white,
                        currentPuzzle : props.user.currentPuzzle,
                        fen:props.user.currentPuzzle.fen

                    })
                }
            }
        }
        else {
            this.setState({
                'fen': '//'
            })
        }
     }

   
    onMove = (from, to) => {
        const oldfen = this.state.fen;
        var i = this.solutionsTree.isCorrectMove(from,to,this.state.fen);
        if (i !== -1){
            this.solutionsTree.goForward(i);
            this.chess.move({ from, to, promotion: 'q' });
            this.setState({
                fen: this.chess.fen(),
                no_move_made:false,
                lastMove:[from,to]
            });
            if (!this.chess.in_checkmate())
                setTimeout(this.makeComputerMove,300);
            else{
                this.setState({
                    finished_game:true,
                    viewOnly:true,
                    lastMove:[]

                })
                if (this.props.user.solved.indexOf(this.props.user.currentPuzzle.id) < 0)
                    this.props.solved_puzzle(this.props.user._id, this.props.user.currentPuzzle.id);
               
            }

        }
        else{
            var chess = new Chess();
            chess.load(oldfen);

            if (chess.move({ from, to, promotion: 'q' }) && chess.in_checkmate()){
                this.setState({
                    fen : chess.fen(),
                    finished_game: true,
                    viewOnly:true

                })
            }
                
            else {
                setTimeout(this.setState({
                    fen: oldfen,
                }),500);
            }
        }
    }
    
    setNexPuzzle(){
        if(this.currentPuzzleIndex >=499)
            this.currentPuzzleIndex=0;
        else 
            this.currentPuzzleIndex=this.currentPuzzleIndex+1;

        var puzzle = this.props.puzzles[this.currentPuzzleIndex];
        console.log('current puzzle index : ' + this.currentPuzzleIndex);
        console.log('puzzles:');
        console.log(this.props.puzzles);
        var id=this.props.user._id;
        console.log(this.props.user);
        this.props.setPuzzle(id,puzzle._id,puzzle.fen, puzzle.solutions)
        this.setState({
            finished_game : false,
            fen : puzzle.fen,
            viewOnly: false,
            lastMove:[]
        })
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
        var initialString = this.state.white ? this.whiteInitial : this.blackInitial;
        var initialClass = this.state.no_move_made ? "direction" : "hide";
        var tick = this.state.finished_game ? "tick" : "hide";
        return (
                    <div>
                    <Row className= "board container" sm={{size:6}}>
                        <ChessDiagram  
                            draggable={{enabled : false}} 
                            fen={this.state.fen} 
                            onMove={this.onMove}
                            orientation={this.state.white ? 'white' : 'black'} 
                            viewOnly={this.state.viewOnly}
                            lastMove = {this.state.lastMove}
                            />
                    </Row>
                    <Container>
                        <Row className={this.props.user ? "buttons-container block" : "hide" }  >
                            <div className={initialClass}>
                                    {initialString}
                            </div>
                            <div className={tick}>
                                <img src={tickIcon } alt="Well Done!"/>
                            </div>
                        </Row>
                        <Row>
                            <Button  className="info-button" onClick={()=>this.setNexPuzzle()}>Next Puzzle</Button>
                        </Row>
                        <Row className="fenRow">
                            <Col className="puzzle-button">
                                    <Button className="info-button "
                                            onClick={()=>this.setState({showFen:true})}>Display Puzzle Fen</Button>
                            </Col>
                            <Col className={this.state.showFen ? 'fen' : 'hide'} style={{fontSize: '12px'}}>
                                {this.props.user ? this.props.user.currentPuzzle.fen : ''};
                            </Col>
                        </Row>
                        <Row>
                            <Button className="info-button" tag={Link} to={(this.props.user && 
                            this.props.user.currentPuzzle) ? 'https://lichess.org/editor/'
                            + this.props.user.currentPuzzle.fen : '/' } target="_blank">Open In Lichess</Button>
                        </Row>
                    </Container>
                    </div>
                
        );
    };


}


function mapStateToChessBoardProps(state){
    return {
        user : state.user,
        puzzles: state.puzzles,
    }
}


function mapDispatchToAppProps(dispatch){
    return {
        setPuzzle: (userid, puzzleid,fen,solutions) => {
            axios.post('/api/current_puzzle', {
                userid,
                puzzleid,
                fen : fen,
                solutions :solutions
            });
            dispatch({
                type : SET_CURRENT_PUZZLE,
                id : puzzleid,
                fen : fen,
                solutions : solutions
            });
        },
        solved_puzzle : (userid, puzzleid) => {
            axios.post('/api/solved', {
                userid,
                puzzleid,
            });
            dispatch({
                type : SOLVED_PUZZLE,
                id : puzzleid,
            })
        },
    
    }

}
export default connect(mapStateToChessBoardProps, mapDispatchToAppProps)(ChessBoard);
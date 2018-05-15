import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Row, Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import {SET_CURRENT_PUZZLE} from '../actions/types';
import axios from 'axios';
 class Map extends Component{
    constructor(props){
        super(props);
    this.renderContent = this.renderContent.bind(this);
    }
    
    componentWillReceiveProps(){
        console.log('receiving new props');
        this.forceUpdate();
    }
    renderContent(){
        console.log(this.props);
        if (this.props.puzzles != null){
            var setPuzzle = this.props.setPuzzle ? this.props.setPuzzle : function(){
            };
            var cols = this.props.puzzles.map( (puzzle, index) => {
                var cond = 'map-item';
                if (this.props.solved && this.props.solved.indexOf(puzzle._id)>-1){
                    cond = 'map-item solved-puzzle-item';
                }
                else {
                    cond = 'map-item  unsolved-puzzle-item';
                }

                return (
                    <Col  className={cond} key={index}>
                    <Link to="/" onClick={()=>setPuzzle(this.props.user._id,puzzle._id,puzzle.fen, puzzle.solutions)}>{index+1}</Link>
                    </Col>
                )
            });
            return cols;
        }
        else{
            return null;
        }
    }
    render(){
        return (
            <Container>
                <Row className="row-container">
                    {this.renderContent()}
                </Row>
        </Container >
        )

    }
}   


function mapStateToMapProps(state){
    return {
        user:state.user,
        puzzles : state.puzzles,
        solved : state.user ? state.user.solved : null
    }
};

function mapDispatchToMapProps(dispatch){
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
    }
}

export default connect(mapStateToMapProps, mapDispatchToMapProps)(Map);
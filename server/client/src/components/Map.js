import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Row, Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import {SET_CURRENT_PUZZLE} from '../actions/types';
 class Map extends Component{
    constructor(props){
        super(props);
    this.renderContent = this.renderContent.bind(this);
    }
    
    componentWillReceiveProps(){
    }
    renderContent(){
        console.log(this.props);
        if (this.props.puzzles != null){
            var setPuzzle = this.props.setPuzzle ? this.props.setPuzzle : function(a,b,c){
                //console.log(a,b,c)
            };
    
            var cols = this.props.puzzles.map( (puzzle, index) => {
                var cond = 'map-item';
                if (this.props.solved && this.props.solved[puzzle._id]){
                    cond += ' solved-puzzle-item';
                }
                else {
                    cond += ' unsolved-puzzle-item';
                }

                return (
                    <Col sm="1" className={cond} key={index}>
                    <Link to="/" onClick={()=>setPuzzle(puzzle._id,puzzle.fen, puzzle.solutions)}>{index+1}</Link>
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
                <Row>
                    {this.renderContent()}
                </Row>
        </Container >
        )

    }
}   


function mapStateToMapProps(state){
    return {
        puzzles : state.puzzles,
        solved : state.user ? state.user.solved : null
    }
};

function mapDispatchToMapProps(dispatch){
    return {
        setPuzzle: (id,fen,solutions) => {
            dispatch({
                type : SET_CURRENT_PUZZLE,
                id : id,
                fen : fen,
                solutions : solutions
            });
            console.log(id);
        },
    }
}

export default connect(mapStateToMapProps, mapDispatchToMapProps)(Map);
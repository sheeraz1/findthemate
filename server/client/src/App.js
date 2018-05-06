import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import RegisterForm from './components/RegisterForm';
import * as actions from './actions';
import {connect} from 'react-redux';
import axios from 'axios';
import {FETCH_USER, FETCH_PUZZLES} from './actions/types';
import ChessBoard from './components/ChessBoard';
import Map from './components/Map';


class App extends Component {
	constructor(props){
		super(props);
		const defaultPuzzle = {
			id: '5ae511e58d453c3c6057fa0d',
			fen: '4k2r/1q3p1p/p2RpQ2/2p1P3/8/1P3b2/P4PrP/4R2K b - - 1 25',
			solutions:
			[ 'g2g8 f6f3 b7f3',
			  'g2g7 f6f3 b7f3',
			  'g2g6 f6f3 b7f3',
			  'g2g5 f6f3 b7f3',
			  'g2g4 f6f3 b7f3',
			  'g2g3 f6f3 b7f3' ],
		   
		}
		this.state={
			currentPuzzle : defaultPuzzle,
		}
	}
	componentDidMount() {
		this.props.fetchUser();
		this.props.fetchPuzzles();
	}

	componentWillReceiveProps(){

	}
  render() {
    return (
      <div className="container"> 
				<BrowserRouter>
							<div>
								<Header className="header"/>
								<Switch>
									<Route exact path="/" component={ChessBoard}/>
									<Route exact path="/map" component={Map} />
									<Route exact path="/login" component={LoginForm}/>
									<Route exact path="/register" component={RegisterForm}/>
								</Switch>
							</div>

				</BrowserRouter>
		    </div>
    );
  }
}

const mapDispatchToAppProps = (dispatch) =>
{
	return {
		fetchUser: () => {
			dispatch ({type:FETCH_USER});
		},
		fetchPuzzles: () =>{
		
				dispatch ({type:FETCH_PUZZLES});
		}
	}

};


const mapStateToAppProps = (state) =>
{
	
	return {
		user : state.user,
		puzzles: state.puzzles,
		currentPuzzle: state.currentPuzzle,
		}

};

export default connect(mapStateToAppProps, mapDispatchToAppProps)(App);

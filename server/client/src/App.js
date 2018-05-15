import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import RegisterForm from './components/RegisterForm';
import {connect} from 'react-redux';
import axios from 'axios';
import {FETCH_USER, FETCH_PUZZLES} from './actions/types';
import ChessBoard from './components/ChessBoard';
import Map from './components/Map';


class App extends Component {
	
	componentDidMount() {
		this.props.fetchUser();
		this.props.fetchPuzzles();
	}

	
  render() {
	console.log(this.props.user);
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
			axios.get('/api/current_user').then(
				function(res){
					console.log('user is ');
					console.log(res.data);
					dispatch({ type: FETCH_USER, payload: res.data });
				}
			)
			
		},
		fetchPuzzles: () =>{
			axios.get('/api/puzzles').then(
				function(res){
					dispatch ({
						type:FETCH_PUZZLES,
						puzzles:res.data
					});
			})
		}
	}
};


const mapStateToAppProps = (state) =>
{
	return {
		user : state.user,
		puzzles: state.puzzles,
		}
};

export default connect(mapStateToAppProps, mapDispatchToAppProps)(App);

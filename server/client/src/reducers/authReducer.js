import {FETCH_USER, SOLVED_PUZZLE, DELETE_USER, SET_CURRENT_PUZZLE} from '../actions/types';

export default function(state=null, action){
	switch (action.type){
		case FETCH_USER:
			return action.payload || false;
		case DELETE_USER:
			return null;
		case SOLVED_PUZZLE:
		{
			var newState = Object.assign({}, state);
			if (newState['solved'])
				(newState['solved']).push(action.id);
			return newState;
		}
		case SET_CURRENT_PUZZLE:
		{
			var state2 = Object.assign({}, state);
			console.log('new state in currentpuzzle is');
			console.log(newState);
			state2.currentPuzzle = {
                id : action.id,
                fen : action.fen,
                solutions : action.solutions
			};
			return state2;
		}
		default: 
			return state;
	}
}
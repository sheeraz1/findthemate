import {FETCH_PUZZLES} from '../actions/types';
export default function(state=null, action){
	switch (action.type){
		case FETCH_PUZZLES:
			return action.puzzles;
		default: 
			return state;
	}
}
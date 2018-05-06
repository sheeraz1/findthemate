import {combineReducers} from 'redux';
import authReducer from './authReducer';
import puzzlesReducer from './puzzlesReducer';
import currentPuzzleReducer from './currentPuzzleReducer';

export default combineReducers({
	user: authReducer,
	puzzles: puzzlesReducer,
	currentPuzzle: currentPuzzleReducer
});
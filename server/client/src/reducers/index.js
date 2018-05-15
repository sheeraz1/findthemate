import {combineReducers} from 'redux';
import authReducer from './authReducer';
import puzzlesReducer from './puzzlesReducer';

export default combineReducers({
	user: authReducer,
	puzzles: puzzlesReducer,
	
});
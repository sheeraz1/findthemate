import {FETCH_USER, SOLVED_PUZZLE} from '../actions/types';

var user = {
    "_id": {
        "$oid": "5adec9dcc63630317067d9ff"
    },
    "email": "gfdfgfd@yahoo.com",
    "password": "imation",
	"__v": 0, 
	"solved": {}
}

export default function(state=null, action){
	switch (action.type){
		case FETCH_USER:
			return user;
		case SOLVED_PUZZLE:
		{
			console.log('' + action.id + 'is solved');
			var newState = Object.assign({}, state);
			(newState['solved'])[action.id] = true;
			return newState;
		}
		default: 
			return state;
	}
}
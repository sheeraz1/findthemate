import {SET_CURRENT_PUZZLE} from '../actions/types';

export default function(state=null, action){
    console.log('inside puzzle reducer');
    switch (action.type){
        case SET_CURRENT_PUZZLE:
            return {
                id : action.id,
                fen : action.fen,
                solutions : action.solutions
            };
        default: 
            return state;
    }
}
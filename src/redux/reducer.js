import { combineReducers } from 'redux';
const INITIAL_STATE  = { 
  formData: [] 
};

export const formReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch(type){
    case 'FORM_SUCCESS' : 
    return {
      ...state,
      ...payload
    }
    default:
      return state
  }
};

export const appReducer = combineReducers({
  formReducer
}); 

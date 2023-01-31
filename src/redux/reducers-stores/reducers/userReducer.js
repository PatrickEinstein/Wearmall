import { UserActionTypes } from "../../actions/user.types";

const INTITIAL_STATE ={
  currentUser : null
}

export const userReducer =(state = INTITIAL_STATE , action)=> {
  switch(action.type){
    case UserActionTypes.SET_CURRENT_USER:
      return{
        ...state,
        currentUser:action.payload
      }

      default:
        return state;
  }
};

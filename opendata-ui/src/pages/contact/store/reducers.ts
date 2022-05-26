import { Action } from "rxjs/internal/scheduler/Action";
import { ContactActionTypes } from "./action-types";

const initialState:any =  {
    contactError:[],
    contact:{}
};

export const ContactReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case ContactActionTypes.CONTACT_SUCCESS:
      return 1;
    case ContactActionTypes.CONTACT_FAIL:
      return {
          ...state,
         
      };
      case ContactActionTypes.GET_CONTACT_SUCCESS:
        return {
          ...state,
          contact:payload
        };
      case ContactActionTypes.GET_CONTACT_FAIL:
        return {
            ...state,
           
        };
    default:
      return state;
  }
};

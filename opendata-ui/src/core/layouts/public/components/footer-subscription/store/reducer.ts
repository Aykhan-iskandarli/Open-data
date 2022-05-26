import { SubscribersActionTypes } from "./action-types";

const initialState = {
  
};

export const ContactForms = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case SubscribersActionTypes.SUBSCRIBERS_SUCCESS:
      return 1;
    case SubscribersActionTypes.SUBSCRIBERS_FAIL:
      return {
          ...state,
         
      };
    default:
      return state;
  }
};

import { ServicesActionTypes } from "./action-types";

const initialState = {
    tags:[]
};

export const SearchReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case ServicesActionTypes.TAG_SUCCESS:
      return {
          ...state,
            tags:payload
      };
    case ServicesActionTypes.TAG_FAIL:
      return {
          ...state,
      };
    default:
      return state;
  }
};

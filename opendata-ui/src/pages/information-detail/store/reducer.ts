import { IActionCreator } from "store/types/store.types";
import { DetailTypes } from "./action-types";

const initialState = {
    detail: []
}


export const DetailReducer = (state = initialState, { type, payload }: IActionCreator) => {
    switch (type) {
        case DetailTypes.GET_DETAIL_SUCCESS:
            return {
                ...state,
                detail: payload
            }
        default:
            return state;
    }
}

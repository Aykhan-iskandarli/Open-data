import { IActionCreator } from "store/types/store.types";
import { IAboutState } from "../types/types";
import { AboutTypes } from "./action-types";

const initialState: IAboutState = {
    data: null
}


export const AboutReducer = (state = initialState, { type, payload }: IActionCreator) => {
    switch (type) {
        case AboutTypes.GET_ABOUT_SUCCESS:
            return {
                ...state,
                data: payload.item
            }
        default:
            return state;
    }
}

import { IActionCreator } from "store/types/store.types";
import { IServiceReduxState } from "../types/types";
import { ServiceTypes } from "./action-types";

const initialState: IServiceReduxState = {
    services: null
}

export const ServiceReducer = (state = initialState, { type, payload }: IActionCreator) => {
    switch (type) {
        case ServiceTypes.GET_SUCCESS:
            return {
                ...state,
                services: payload.items
            }
        default:
            return state;
    }
}

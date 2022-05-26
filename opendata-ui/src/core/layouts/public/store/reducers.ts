import { IActionCreator } from 'store/types/store.types';
import { IPublicReduxState } from '../types/public';
import { LeftMenuActionTypes, publicConstants } from "./action-types";

const initialState: IPublicReduxState = {
    lang: 'az',
    loading: false
}

export const publicReducer = (state = initialState, action: IActionCreator) => {
    switch (action.type) {

        case publicConstants.LOCALIZATION_TOGGLE:
            return {
                ...state,
                lang: action.payload
            }
        case publicConstants.LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}

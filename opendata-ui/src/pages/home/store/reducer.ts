import { IActionCreator } from "store/types/store.types";
import { IFaq, IHomeReduxState } from "../types/types";
import { FaqTypes, HomeTypes } from "./action-types";

const initialState: IHomeReduxState = {
    categories: null,
    organisations: null,
    popularServices: null,
    newServices: null,
    faqs: [],
    faqError: [],
    dropdown_categories: [],
    dropdown_organisations: [],
    dropdown_fileTypes: [],
    dropdown_content: [],
    dropdown_languages: [],
}

export const HomeReducer = (state = initialState, { type, payload }: IActionCreator) => {
    switch (type) {
        case HomeTypes.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload
            }
        case HomeTypes.GET_ORGANISATIONS_SUCCESS:
            return {
                ...state,
                organisations: payload
            }
        case HomeTypes.GET_DROPDOWN_SUCCESS:
            return {
                ...state,
                ...payload
            }
        case FaqTypes.GET_FAQ_SUCCESS:
            return {
                ...state,
                faqs: payload
            }
        case FaqTypes.GET_FAQ_ERROR:
            return {
                ...state,
                faqError: payload
            }
        default:
            return state;
    }
}



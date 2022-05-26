import { LeftMenuActionTypes } from "./action-types";
import { Dispatch } from 'redux';
import { DbService, langType } from 'assets/db/db.service';
import { IActionCreator } from 'store/types/store.types';
import { container } from 'tsyringe';
import { publicConstants } from './action-types';



export const toggleLeftMenu = (isActive: boolean) => {
    return {
        type: LeftMenuActionTypes.TOGGLE_LEFT_MENU,
        payload: isActive
    }
}


export const localizationSucces = (localization: langType) => ({
    type: publicConstants.LOCALIZATION_TOGGLE,
    payload: localization
})

export const localizationToggle = (lang: langType) => (
    (dispatch: Dispatch<IActionCreator>) => {
        dispatch(localizationSucces(lang))
        window.location.reload()
    }
)
export const loading = (loading: boolean) => ({
    type: publicConstants.LOADING,
    payload: loading
})
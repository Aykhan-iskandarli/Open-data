import { loading } from "core/layouts/public/store/actions";
import { Dispatch } from "redux";
import { IActionCreator } from "store/types/store.types";
import { container } from "tsyringe";
import { AboutServices } from "../services/about.services";
import { IAbout } from "../types/types";
import { AboutTypes } from "./action-types";

const service = container.resolve(AboutServices);

export const getAboutSuccess = (about: IAbout[]) => ({
    type: AboutTypes.GET_ABOUT_SUCCESS,
    payload: about
})

export const getAbout = () => (
    (dispatch: Dispatch<IActionCreator>) => {
        dispatch(loading(true))
        service.getAbout().then(res => {
            dispatch(getAboutSuccess(res))
        }).catch(err =>
            console.error(err)
        ).then(() => dispatch(loading(false)))
    }
)
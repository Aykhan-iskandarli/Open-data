import { loading } from "core/layouts/public/store/actions";
import { Dispatch } from "redux";
import { IActionCreator } from "store/types/store.types";
import { container } from "tsyringe";
import { ServiceServices } from "../services/service.service";
import { IParams, IService } from "../types/types";
import { ServiceTypes } from "./action-types";

const service = container.resolve(ServiceServices);

export const getSuccess = (data: IService[]) => ({
    type: ServiceTypes.GET_SUCCESS,
    payload: data
})

export const getServicesBySearch = (params: IParams) => (
    (dispatch: Dispatch<IActionCreator>) => {
        dispatch(loading(true))
        service.getServicesBySearch(params).then(res => {
            dispatch(getSuccess(res))
        }).catch(err =>
            console.error(err)
        ).then(() =>
            dispatch(loading(false))
        )
    }
)

export const getServicesByDetailedSearch = (params: any) => (
    (dispatch: Dispatch<IActionCreator>) => {
        dispatch(loading(true))
        service.getServicesByDetailedSearch(params).then(res => {
            dispatch(getSuccess(res))
        }).catch(err =>
            console.error(err)
        ).then(() =>
            dispatch(loading(false))
        )
    }
)

export const getServicesByTag = (params: IParams) => (
    (dispatch: Dispatch<IActionCreator>) => {
        dispatch(loading(true))
        service.getServicesByTag(params).then(res => {
            dispatch(getSuccess(res))
        }).catch(err =>
            console.error(err)
        ).then(() =>
            dispatch(loading(false))
        )
    }
)
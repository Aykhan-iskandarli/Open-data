import { loading } from "core/layouts/public/store/actions";
import { Dispatch } from "redux";
import { IActionCreator, IPageParams } from "store/types/store.types";
import { container } from "tsyringe";
import { CategoriesServices } from "../services/caterogies.service";
import { DropdownServices } from "../services/dropdown.service";
import { FaqServices } from "../services/faq.service";
import { ICategory, IDropdown, IFaq, IOrganisation } from "../types/types";
import { FaqTypes, HomeTypes } from "./action-types";

const service = container.resolve(CategoriesServices);

export const getCategoriesSuccess = (categories: ICategory[]) => ({
    type: HomeTypes.GET_CATEGORIES_SUCCESS,
    payload: categories
})

export const getCategories = (params: IPageParams) => (
    (dispatch: Dispatch<IActionCreator>) => {
        dispatch(loading(true))
        service.getCategories(params)
            .then(res => {
                dispatch(getCategoriesSuccess(res))
            }).catch(err =>
                console.error(err)
            ).then(() =>
                dispatch(loading(false))
            )
    }
)

export const getOrganisationsSuccess = (optanisation: IOrganisation[]) => ({
    type: HomeTypes.GET_ORGANISATIONS_SUCCESS,
    payload: optanisation
})

export const getOrganisations = (params: IPageParams) => (
    (dispatch: Dispatch<IActionCreator>) => {
        dispatch(loading(true))
        service.getOrganisations(params)
            .then(res => {
                dispatch(getOrganisationsSuccess(res))
            }).catch(err =>
                console.error(err)
            ).then(() =>
                dispatch(loading(false))
            )
    }
)


const serviceFaq = container.resolve(FaqServices);

export const getFaqSuccess = (faqs: IFaq[]) => ({
    type: FaqTypes.GET_FAQ_SUCCESS,
    payload: faqs
})
export const getFaqError = (err: IFaq[]) => ({
    type: FaqTypes.GET_FAQ_SUCCESS,
    payload: err
})

export const getFaqs = (data:any) => (
    (dispatch: Dispatch<IActionCreator>) => {
        serviceFaq.getFaqs(data).then((res: any) => {
            dispatch(loading(true))
            dispatch(getFaqSuccess(res))
        }).catch(err => {
            dispatch(getFaqError(err))
        }
        ).then(() =>
            dispatch(loading(false))
        )
    }
)



//#region  Dropdown
const serviceDropdown = container.resolve(DropdownServices);

export const getDropdownSuccess = ({ name, data }: { name: string, data: IDropdown[] }) => ({
    type: HomeTypes.GET_DROPDOWN_SUCCESS,
    payload: { [name]: data }
})

export const getDropdownCategories = () => (
    (dispatch: Dispatch<IActionCreator>) => {
        dispatch(loading(true))
        serviceDropdown.getCategories().then((res: any) => {
            dispatch(getDropdownSuccess({ name: "dropdown_categories", data: res.list }))
        }).catch(err => {
            dispatch(getFaqError(err))
        }
        ).then(() =>
            dispatch(loading(false))
        )
    }
)

export const getDropdownOrganisations = () => (
    (dispatch: Dispatch<IActionCreator>) => {
        dispatch(loading(true))
        serviceDropdown.getOrganisations().then((res: any) => {
            dispatch(getDropdownSuccess({ name: "dropdown_organisations", data: res.list }))
        }).catch(err => {
            dispatch(getFaqError(err))
        }
        ).then(() =>
            dispatch(loading(false))
        )
    }
)

export const getDropdownFileTypes = () => (
    (dispatch: Dispatch<IActionCreator>) => {
        dispatch(loading(true))
        serviceDropdown.getFileTypes().then((res: any) => {
            dispatch(getDropdownSuccess({ name: "dropdown_fileTypes", data: res.list }))
        }).catch(err => {
            dispatch(getFaqError(err))
        }
        ).then(() =>
            dispatch(loading(false))
        )
    }
)

export const getDropdownContent = () => (
    (dispatch: Dispatch<IActionCreator>) => {
        dispatch(loading(true))
        serviceDropdown.getContent().then((res: any) => {
            dispatch(getDropdownSuccess({ name: "dropdown_content", data: res.list }))
        }).catch(err => {
            dispatch(getFaqError(err))
        }
        ).then(() =>
            dispatch(loading(false))
        )
    }
)

export const getDropdownLanguages = () => (
    (dispatch: Dispatch<IActionCreator>) => {
        dispatch(loading(true))
        serviceDropdown.getLanguages().then((res: any) => {
            dispatch(getDropdownSuccess({ name: "dropdown_languages", data: res.list }))
        }).catch(err => {
            dispatch(getFaqError(err))
        }
        ).then(() =>
            dispatch(loading(false))
        )
    }
)

//#endregion Dropdown
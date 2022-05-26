import store from "store/store.worker"

export interface IActionCreator {
    type: string,
    payload?: any
}

export interface IPageParams {
    PageNumber?: number,
    PageSize?: number
}


export type RootState = ReturnType<typeof store.getState>

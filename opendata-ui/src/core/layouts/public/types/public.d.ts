export interface IPublicReduxState {
    lang: string,
    loading: boolean
}




export type RootState = ReturnType<typeof store.getState>
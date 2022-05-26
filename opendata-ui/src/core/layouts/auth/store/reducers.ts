import { AuthActionTypes } from './action-types';
const defaultUser = {
    Claims: []
}
const initialState = {
    authentication: false,
    user: {
        Claims: []
    }
}

export const authReducer = (state = initialState, { type, payload }: any) => {
    switch (type) {
        case AuthActionTypes.SIGN_IN:
            const claims = [...state.user.Claims]
            let user;
            payload.Claims && payload.Claims.length > 0 ? user = {...payload, Claims : [...claims, ...payload.Claims]} : user = {...payload, Claims: [...claims]}
            return {
                ...state,
                user,
                authentication: true
            }
        case AuthActionTypes.SIGN_IN_FAIL:
            return {
                ...state,
                authentication: false
            }
        case AuthActionTypes.SIGN_OUT:
            return {
                ...state,
                authentication: false,
                user: defaultUser
            }
        case AuthActionTypes.SET_CLAIMS:
            return {
                ...state,
                user: {...state.user, Claims: [...defaultUser.Claims,...payload]}
            }
        default:
            return state;
    }
}

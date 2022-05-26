import { AuthActionTypes } from './action-types'
import { AuthService } from '../services/auth.service';
import { container } from 'tsyringe';
import {ILogin} from "../types/auth";
import history from "../../../configs/history.config";
import jwt_decode from "jwt-decode";

const service = container.resolve(AuthService);

export const logIn = (data: ILogin) => (dispatch: any) => {
    service.signIn(data).then((res: any) => {
        localStorage.setItem('authToken', res.data.token)
        dispatch(setUserData(res.data.token))
        // dispatch(getClaims())
        history.replace('/app')
    })
        // .then(()=>{
        //     service.getUserClaims()
        //         .then((res)=>{
        //             const claims = res?.data?.claimList?.map((claim : any)=>{
        //                 return claim.claimName
        //             }) || []
        //             dispatch(setClaims(claims))
        //         })
        // })
        .catch(err => {
        // errorToast('İstifadəçi adı ve ya sifrə yalnisdir!')
        dispatch(loginFail)
    })
}
export const logOut = () => (dispatch: any) => {
    dispatch({
        type: AuthActionTypes.SIGN_OUT
    })
    localStorage.removeItem('authToken')
    history.replace('/auth')

}
export const loginSuccess = (user: any) => ({
    type: AuthActionTypes.SIGN_IN,
    payload: user
})
export const loginFail = () => ({
    type: AuthActionTypes.SIGN_IN_FAIL
})
export const setUserData = (token: string) => (dispatch: any) => {
    try {
        const token_decode = jwt_decode(token)
        dispatch(loginSuccess(token_decode))
    }
    catch (error){
        console.log(error)
    }
}

export const setClaims = (claims : any[])=>({
    type : AuthActionTypes.SET_CLAIMS,
    payload: claims
})




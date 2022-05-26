import React from 'react';
import {AuthRoutes} from "../../../router/router";
import './auth.component.scss'

const AuthComponent = ()=> {
        return (
            <div className='auth-section'>
                <div className='auth-section__wrapper'>
                    <AuthRoutes from={'auth'} to={'login'}/>
                </div>
            </div>
        );
}

export default AuthComponent;

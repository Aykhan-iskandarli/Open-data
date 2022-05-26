import React, { useState } from 'react';
import './register.component.scss';
import CardComponent from "../../packages/RCard/card.component";
import { Link } from "react-router-dom";
import ButtonComponent from "../../packages/RButton/button.component";
import { mapFormItems } from "../../core/helpers/common-functions/common-functions";


const RegisterComponent = () => {
    const [inputs, setInputs] = useState({
        username: {
            type: 'text',
            label: 'USERNAME',
            icon: 'user',
            value: '',
            validation: {
                required: {
                    value: true,
                    errorText: `Username can't be empty`
                },
                maxLength: {
                    value: 20,
                    errorText: 'Max number of characters : 20'
                },
                minLength: {
                    value: 5,
                    errorText: 'Min number of characters : 5'
                },
            },
            currentErrTxt: '',
            touched: false,
            isValid: false
        },
        email: {
            type: 'email',
            label: 'EMAIL',
            icon: 'at',
            value: '',
            validation: {
                required: {
                    value: true,
                    errorText: `Username can't be empty`
                },
                regexp: {
                    value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                    errorText: 'Not a valid email'
                }
            },
            currentErrTxt: '',
            touched: false,
            isValid: false
        },
        password: {
            type: 'password',
            label: 'PASSWORD',
            icon: 'lock',
            value: '',
            visible: false,
            validation: {
                required: {
                    value: true,
                    errorText: `Username can't be empty`
                },
                minLength: {
                    value: 6,
                    errorText: 'Min number of characters : 6'
                },
            },
            currentErrTxt: '',
            touched: false,
            isValid: false
        },
        passwordRepeat: {
            type: 'password',
            label: 'REPEAT PASSWORD',
            icon: 'lock',
            value: '',
            visible: false,
            validation: {
                required: {
                    value: true,
                    errorText: `Username can't be empty`
                },

                minLength: {
                    value: 6,
                    errorText: 'Min number of characters : 6'
                },
                isEqualToPass: {
                    value: true,
                    errorText: 'Passwords dont match'
                }
            },
            currentErrTxt: '',
            touched: false,
            isValid: false
        }
    })

    const [formValid, setFormValid] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);


    return (
        <div className='auth-page-section py-50 px-20 w-100 d-flex justify-center align-center'>
            <div className='login-section__panel'>
                <CardComponent>
                    <div className='login-section__content'>
                        <div className="login-section__head mb-35 text-center">
                            <h3 className='m-0'>
                                Register
                            </h3>
                            <p>
                                Create a new account
                            </p>
                        </div>
                        <form className="login-section__form">
                            {
                                mapFormItems(inputs, (prevFunc: any) => { setInputs(prevFunc) }, setFormValid)}
                            <div className="login-section__button-wrapper mt-20">
                                <ButtonComponent classNames={'w-100 p-15'} type={'submit'} color={'primary'}>
                                    Register
                                </ButtonComponent>
                            </div>
                            <span className={'or my-20 text-center d-inline-block w-100'}>
                                OR
                            </span>
                            <div className="login-section__button-wrapper">
                                <Link to={'/auth/login'}>
                                    <ButtonComponent classNames={'w-100 p-15'} type={'submit'} color={'secondary'}>
                                        Log In
                                    </ButtonComponent>
                                </Link>

                            </div>
                        </form>
                    </div>
                </CardComponent>

            </div>

        </div>
    );
}

export default RegisterComponent;


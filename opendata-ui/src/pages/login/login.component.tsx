import React, {Component, useState} from 'react';
import './login.component.scss';
import CardComponent from "../../packages/RCard/card.component";
import {Link} from "react-router-dom";
import ButtonComponent from "../../packages/RButton/button.component";
import {mapFormItems} from "../../core/helpers/common-functions/common-functions";

const LoginComponent = () => {
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
    })
    const [formValid, setFormValid] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
        return (
            <div className='auth-page-section py-50 px-20 w-100 d-flex justify-center align-center'>
                <div className='auth-page-section__panel'>
                    <CardComponent>
                        <div className=''>
                            <div className=" mb-35 text-center">
                                <h3 className='m-0'>
                                    Sign In
                                </h3>
                                <p>
                                    Log in to your account to continue.
                                </p>
                            </div>
                            <form className="">
                                {mapFormItems(inputs, (prevFunc: any) => {
                                    setInputs(prevFunc)
                                }, setFormValid)}
                                <div className=" mt-20">
                                    <ButtonComponent classNames={'w-100 p-15'} type={'submit'} color={'primary'}>
                                        Log In
                                    </ButtonComponent>
                                </div>
                                <span className={'or my-20 text-center d-inline-block w-100'}>
                                    OR
                                </span>
                                <div className="">
                                    <Link to={'/auth/register'}>
                                        <ButtonComponent classNames={'w-100 p-15'} type={'submit'} color={'secondary'}>
                                            Register
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

export default LoginComponent;


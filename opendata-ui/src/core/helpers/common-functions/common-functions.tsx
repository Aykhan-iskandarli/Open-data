import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent } from "react";
import JWT from "jwt-simple"
import store from 'store/store.worker';

export const encodeURL = (payload: any) => {
    return JWT.encode(payload, 'xxx')
}
export const decodeURL = (payload: string) => {
    return JWT.decode(payload, 'xxx')
}

export function GetLang(): any {
    // return store.getState().publicState.lang;
    return localStorage.getItem("opd_lang");
}


export const debounce = (func: any, wait: number) => {
    let timeout: any;
    return function executedFunction(...args: any) {
        const later = () => {
            timeout = null;
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

export const generateGuid = () => {
    let dt = new Date().getTime();
    const guid = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return guid;
}


export const recursiveLister = (rows: any[], childColumn: string = '', superParentValue: any = null) => {
    const parents: any[] = [];
    const noParent: any[] = []
    const arr = JSON.parse(JSON.stringify(rows));
    arr.forEach((item: any, index: number) => {
        if (item[childColumn] !== superParentValue) {
            if (arr.find((it: any) => it.id === item[childColumn])) {
                arr.forEach((datum: any) => {
                    if (datum.id === item[childColumn]) {
                        if (datum.children && Array.isArray(datum.children)) {
                            datum.children.push(item);
                        } else {
                            datum.children = [item];
                        }
                    }
                });
            } else {
                noParent.push(item)
            }
        }
    });
    arr.forEach((item: any) => {
        if (item[childColumn] === superParentValue) {
            parents.push(item);
        }
    });
    noParent.forEach(item => {
        parents.push(item)
    })
    return parents;
};

export function changePassVisibility(input: any, callback: any) {
    callback((prev: any) => {
        const prevInput = { ...prev.inputs[input] };
        prevInput.visible = !prevInput.visible;
        return {
            ...prev,
            inputs: {
                ...prev.inputs,
                [input]: prevInput
            }
        }
    })

}

export function mapFormItems(inputs: any, callback: any, validCallback: any) {
    return Object.keys(inputs).map((input, index) => {
        let currentInput: any = inputs[input]
        if (currentInput.type === 'select') {
            return <div key={currentInput.label + index} className={`pt-10 pb-15`}>
                <label className={`r-label`}>{currentInput.label}</label>
                <select onChange={(e) => {
                    changeInputValue(e, input, inputs, callback)
                }
                }
                    onBlur={(e) => {
                        inputBlur(e, input, inputs, callback, validCallback)
                    }
                    }
                    value={currentInput.value} className={`r-select `}>
                    {currentInput.options.map((opt: any) => {
                        return <option value={opt.value}>{opt.title}</option>
                    })}
                </select>
                <span className={'err-txt'}>
                    {!currentInput.isValid && currentInput.touched ? currentInput.currentErr : null}
                </span>
            </div>
        } else if (currentInput.type === 'textarea') {
            return <div key={currentInput.label + index} className={` pt-10 pb-15`}>
                {currentInput.icon ? <FontAwesomeIcon className=''
                    icon={currentInput.icon} /> : null}

                <label className={'r-label'}>{currentInput.label}</label>
                <textarea onChange={(e) => {
                    changeInputValue(e, input, inputs, callback)
                }
                }
                    onBlur={(e) => {
                        inputBlur(e, input, inputs, callback, validCallback)
                    }
                    }
                    className={`r-textarea`}>
                    {currentInput.value}
                </textarea>
                <span className={'err-txt'}>
                    {!currentInput.isValid && currentInput.touched ? currentInput.currentErr : null}
                </span>
            </div>
        } else {
            return <div key={currentInput.label + index} className={` pt-10 pb-15`}>
                <label className={'r-label'}>{currentInput.label}</label>
                {currentInput.type === 'password' ?
                    <input onChange={(e) => {
                        changeInputValue(e, input, inputs, callback)
                    }}
                        onBlur={(e) => {
                            inputBlur(e, input, inputs, callback, validCallback)
                        }
                        }
                        type={currentInput.visible ? 'text' : 'password'} className={`r-input mt-8 px-45 py-13`}
                        placeholder={currentInput.placeholder} />
                    :
                    <input onChange={(e) => {
                        changeInputValue(e, input, inputs, callback)
                    }}
                        onBlur={(e) => {
                            inputBlur(e, input, inputs, callback, validCallback)
                        }
                        }
                        type={currentInput.type} className={`r-input mt-8 px-45 py-13`}
                        placeholder={currentInput.placeholder} />
                }
                <span className={'err-txt'}>
                    {!currentInput.isValid && currentInput.touched ? currentInput.currentErrTxt : null}
                </span>
            </div>
        }
    })
}

export function changeInputValue(event: ChangeEvent<any>, input: string, state: any, callback: any, stateKey: string = 'inputs') {

    const prevInput: any = { ...state[input] }
    prevInput.value = event.target.value
    prevInput.touched = true;
    prevInput.currentErrTxt = ''

    callback((prev: any) => {
        return {
            ...prev,
            [input]: prevInput
        }
    })
}

export function inputBlur(event: ChangeEvent<any>, input: string, state: any, callback: any, validCallback: any) {
    callback((prev: any) => {
        const prevInput = { ...prev[input] }
        prevInput.isValid = checkInputValidation(prevInput.value, prevInput.validation, prevInput, state)
        let formValid = true
        Object.keys(state).map(item => {
            formValid = state[item].isValid && formValid
        })
        return {
            ...prev,
            [input]: prevInput
        }
    })

    validCallback(() => {
        let formValid = true
        Object.keys(state).map(item => {
            formValid = state[item].isValid && formValid
        })
        return formValid
    })
}

export function checkInputValidation(value: any, rules: any, input: any, inputState: any) {
    let isValid = true;
    if (rules.regexp) {
        if (value.trim().length > 0) {
            const exp = rules.regexp.value
            if (!Array.isArray(exp)) {
                const reg = new RegExp(exp)
                const thisValid = reg.test(value.trim())
                isValid = thisValid && isValid
                if (!thisValid) {
                    input.currentErrTxt = rules.regexp.errorText
                }
            } else {
                exp.forEach((item: any) => {
                    const reg = new RegExp(item.exp)
                    const thisValid = reg.test(value.trim())
                    isValid = thisValid && isValid
                    if (!thisValid) {
                        input.currentErrTxt = item.errorText
                    }
                })

            }
        }
    }
    if (rules.minLength) {
        const thisValid = value.trim().length >= Number(rules.minLength.value) || value.trim() === ''
        isValid = thisValid && isValid
        if (!thisValid) {
            input.currentErrTxt = rules.minLength.errorText
        }
        // if(thisValid){
        //     input.currentErrTxt = ""
        // }
    }
    if (rules.maxLength) {
        const thisValid = value.trim().length <= Number(rules.maxLength.value)
        isValid = thisValid && isValid
        if (!thisValid) {
            input.currentErrTxt = rules.maxLength.errorText
        }
        // if(thisValid){
        //     input.currentErrTxt = ""
        // }
    }
    if (rules.isEqualToPass) {
        isValid = value === inputState.password.value && isValid
        if (!isValid) {
            input.currentErrTxt = rules.isEqualToPass.errorText
        }
    }
    if (rules.required) {
        const thisValid = value.trim() !== ''
        isValid = thisValid && isValid;
        if (!thisValid) {
            input.currentErrTxt = rules.required.errorText
        }
    }

    return isValid;
}

export const checkClaims = (userClaims: any[] = [], claim: string = '') => {
    return userClaims?.includes(claim)
}

export const renderDateFormat = (date: any, inputFormat: boolean = false) => {
    const dateFormat = new Date(date)
    let dayFormat: any = ""
    let mothFormat: any = ""
    let yearFormat: any = ""
    if (dateFormat.getMonth() >= 9) {
        mothFormat = dateFormat.getMonth() + 1
    } else {
        mothFormat = "0" + (dateFormat.getMonth() + 1)
    }
    console.log(dateFormat.getDate())
    if (dateFormat.getDate() >= 10) {
        dayFormat = dateFormat.getDate()
    } else dayFormat = '0' + dateFormat.getDate()
    yearFormat = dateFormat.getFullYear()

    return inputFormat ? yearFormat + "-" + mothFormat + "-" + dayFormat : dayFormat + "." + mothFormat + "." + yearFormat
}

export const extractTime = (date: any) => {
    console.log(date)
    let hours: any = ""
    let minutes: any = ""

    const dateFormat = new Date(date)
    if (dateFormat.getHours() <= 9) {
        hours = `0${dateFormat.getHours()}`
    } else {
        hours = dateFormat.getHours()
    }

    if (dateFormat.getMinutes() <= 9) {
        minutes = `0${dateFormat.getMinutes()}`
    } else {
        minutes = dateFormat.getMinutes()
    }
    return `${hours}:${minutes}`
}

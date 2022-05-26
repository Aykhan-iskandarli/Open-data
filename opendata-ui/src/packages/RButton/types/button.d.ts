import React from "react";

export interface IButtonProps {
    click? :function,
    color? : String,
    rounded? : Boolean,
    size? : String,
    type? : 'button' | 'reset' | 'submit',
    outline? : Boolean,
    classNames? : String,
    disabled? : boolean,
    width? : number,
    children? : React.ReactNode
}

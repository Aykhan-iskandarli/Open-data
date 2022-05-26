import React from 'react';
import { IButtonProps } from './types/button';
import './button.component.scss'
const ButtonComponent = (props : IButtonProps) =>{
        return (
            <button type={props.type || 'button'}
                    onClick={props.click}
                    style={props.width ? { width : props.width+'px'} : {}}
                    className={
                        `btn
                         btn--${props.color || 'primary'}
                         btn--size-${props.size || 'lg'}
                         ${props.outline ? `btn--outline--${props.color}` : ''}
                         ${props.rounded ? ' btn--rounded' : ''}
                         ${props.classNames}  `}
                    disabled={props.disabled || false}
            >
                {props.children}
            </button>
        );
}

export default ButtonComponent

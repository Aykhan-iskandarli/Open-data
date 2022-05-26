import React from 'react'
import { InputProps } from './types/input';
import './input.component.scss'

const InputComponent = (props: InputProps) => {
  return (
    <div className={`input-div ${props.inputCont}`}
    >
      {
        props.label && <label>{props.label}</label>
      }
      <input
        type={props.type}
        className={`form-control ${props.className}`}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        onMouseEnter={props.show}
        onKeyDown={props.onKeyDown}
      />
      {props.children}
      {
        props.error && <div className="error-text">
          {props.error}
        </div>
      }
    </div>
  )
}

export default InputComponent
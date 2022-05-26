import React from "react";
import { FormGroupProps } from "./types/formGroup";
import "./formgroup.component.scss"

const FormGroupComponent = (props:FormGroupProps) => {
  return <div className="form-group">{props.children}</div>;
};

export default FormGroupComponent;

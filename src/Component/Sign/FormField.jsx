import React from "react";
import classes from '../../assets/Styles/Signup.module.scss'
export function TextareaField({ name, label, ...rest }) {
  return (
    <div>
      {/*<label htmlFor={name}>{label}</label>*/}
      <textarea className={classes.addresinp} id={name} name={name} {...rest} />
    </div>
  );
}

export function FormField({ name, label, ...rest }) {
  return (
    <div className={classes.FormField}>
      {/*<label htmlFor={name} className={classes.formFieldLabel}>{label}</label>*/}
      <input id={name} name={name} {...rest} className={classes.formFieldInp}/>
    </div>
  );
}

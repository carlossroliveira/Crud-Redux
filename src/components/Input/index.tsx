// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { ChangeEvent } from 'react';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import style from './style.module.scss';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { IInputProps } from './types';

export const Input = (props: IInputProps) => {
  return (
    <>
      <div className={style.col3}>
        <input
          required
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          className={style.effect20}
          type="text"
        />
        <label>{props.name}</label>
        <span className={style.focusBorder}>
          <i></i>
        </span>
      </div>
    </>
  );
};

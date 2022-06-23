// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import styles from './button.module.scss';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { IButtonProps } from './types';

export const Button = (props: IButtonProps) => {
  return (
    <button className={styles.button} role="button">
      {props.text}
    </button>
  );
};

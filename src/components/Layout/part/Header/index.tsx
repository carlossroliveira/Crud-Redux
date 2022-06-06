// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { useDispatch } from 'react-redux';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import styles from './header.module.scss';
import { incrementar } from '../../../../store/actions/function';

export const Header = () => {
  const dispacth = useDispatch();

  const kk = () => {
    dispacth(incrementar());
  };
  return (
    <div className={styles.container}>
      <button onClick={kk}>aa</button>
    </div>
  );
};

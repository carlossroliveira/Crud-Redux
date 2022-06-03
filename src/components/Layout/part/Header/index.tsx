// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { useDispatch } from 'react-redux';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import styles from './header.module.scss';

export const Header = () => {
  const dispacth = useDispatch();

  const kk = () => {
    dispacth({
      type: 'INCREMENTAR',
    });
  };
  return <div className={styles.container}>
    <button onClick={kk}>aa</button>
  </div>;
};

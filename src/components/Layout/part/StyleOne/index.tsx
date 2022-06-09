// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { useSelector } from 'react-redux'
import { State } from '../../../../store'
// -------------------------------------------------
// Styles
// -------------------------------------------------
import styles from './styleOne.module.scss';

export const StyleOne = () => {




  const currentYear: number = new Date().getFullYear();
  return (
    <div className={styles.container}>
      <>
      <h1 className={styles.container__title}>
        &copy; {currentYear} | Carlos Oliveira
      </h1>
      </>
    </div>
  );
};

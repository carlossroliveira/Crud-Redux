// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { useSelector } from 'react-redux'
// -------------------------------------------------
// Styles
// -------------------------------------------------
import styles from './styleOne.module.scss';

export const StyleOne = () => {

  const state = useSelector((state)=> state)



  const currentYear: number = new Date().getFullYear();
  return (
    <div className={styles.container}>
      <>
      <h1 className={styles.container__title}>
        &copy; {currentYear} | Carlos Oliveira
      </h1>
      valor:{state}
      </>
    </div>
  );
};

// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { Link } from 'react-router-dom';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import styles from './aside.module.scss';

export const Aside = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>
        <span className={styles.container__title__span}>C</span>rud -{' '}
        <span className={styles.container__title__span}>R</span>edux
      </h1>

      <div>
        <Link to="/">Dashboard</Link>
        <br />
        <br />
        <br />
        <Link to="/create">create</Link>
      </div>
    </div>
  );
};

import React from 'react';
import styles from './aside.module.scss';

export const Aside = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>
        <span className={styles.container__title__span}>C</span>rud -{' '}
        <span className={styles.container__title__span}>R</span>edux
      </h1>

      <div>
        <a href="">Dash</a> <br />
        <a href="">editar</a>
      </div>
    </div>
  );
};

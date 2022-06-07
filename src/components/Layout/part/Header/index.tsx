// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import img from '../../../../assets/user.jpg';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import styles from './header.module.scss';

export const Header = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container__first}>
        <div className={`${styles.formGroup} ${styles.field}`}>
          <input
            type="input"
            className={styles.formField}
            placeholder="Search person"
            name="name"
          />
          <label htmlFor="name" className={styles.formLabel}>
            Search person
          </label>
        </div>
      </div>
      <div className={styles.container__second}>
        <img src={img} alt="Image" />
        <div>Carlos</div>
      </div>
    </section>
  );
};

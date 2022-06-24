// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import img from '../../../../assets/user.jpg';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import styles from './header.module.scss';

export const Header = () => {
  const location = useLocation();
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    if (location.pathname === '/') setValue('/');
    if (location.pathname === '/Create') setValue('Create');
    if (location.pathname === '/Update') setValue('Update');
    if (location.pathname === '/Delete') setValue('Delete');
  }, [location]);

  return (
    <>
      <section className={styles.container}>
        {value === '/' && (
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
        )}

        {value === 'Create' && (
          <div className={styles.container__first}>
            <div className={styles.title}>
              <h1>Registration</h1>
            </div>
          </div>
        )}

        {value === 'Update' && (
          <div className={styles.container__first}>
            <div className={styles.title}>
              <h1>Edit</h1>
            </div>
          </div>
        )}

        {value === 'Delete' && (
          <div className={styles.container__first}>
            <div className={styles.title}>
              <h1>Delete</h1>
            </div>
          </div>
        )}

        <div className={styles.container__second}>
          <img src={img} alt="Image" />
          <div>Carlos</div>
        </div>
      </section>
    </>
  );
};

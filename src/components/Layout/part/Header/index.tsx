// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import img from '../../../../assets/user.jpg';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import styles from './header.module.scss';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { IHeaderProps } from './types';
import { CREATE, DELETE, READ, UPDATE, UPDATE_LIST } from '../Aside/types';

export const Header = (props: IHeaderProps) => {
  const location = useLocation();
  const [value, setValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.setFilter(event.target.value);
  };

  useEffect(() => {
    if (location.pathname === READ) setValue(READ);
    if (location.pathname === CREATE) setValue(CREATE);
    if (location.pathname === UPDATE) setValue(UPDATE);
    if (location.pathname === DELETE) setValue(DELETE);
    if (
      location.pathname !== READ &&
      location.pathname !== CREATE &&
      location.pathname !== DELETE
    )
      setValue(UPDATE_LIST);
  }, [location]);

  return (
    <>
      <section className={styles.container}>
        {value === READ && (
          <div className={styles.container__first}>
            <div className={`${styles.formGroup} ${styles.field}`}>
              <input
                type="input"
                className={styles.formField}
                placeholder="Search person"
                name="name"
                value={props.filter}
                onChange={handleChange}
              />
              <label htmlFor="name" className={styles.formLabel}>
                Search person
              </label>
            </div>
          </div>
        )}

        {value === CREATE && (
          <div className={styles.container__first}>
            <div className={styles.title}>
              <h1>Registration</h1>
            </div>
          </div>
        )}

        {value === UPDATE && (
          <div className={styles.container__first}>
            <div className={styles.title}>
              <h1>Edit</h1>
            </div>
          </div>
        )}

        {value === UPDATE_LIST && (
          <div className={styles.container__first}>
            <div className={styles.title}>
              <h1>Edit</h1>
            </div>
          </div>
        )}

        {value === DELETE && (
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

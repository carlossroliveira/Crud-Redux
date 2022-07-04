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
import {
  CREATE,
  DELETE,
  DELETE_INFO,
  ERROR,
  READ,
  UPDATE,
  UPDATE_LIST,
} from '../Aside/types';

export const Header = (props: IHeaderProps) => {
  const location = useLocation();
  const [value, setValue] = useState<string>(location.pathname);

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
      location.pathname !== UPDATE &&
      location.pathname !== DELETE
    )
      setValue(ERROR);

    if (location.pathname === `${UPDATE_LIST}0`) setValue(UPDATE_LIST);
    if (location.pathname === `${UPDATE_LIST}1`) setValue(UPDATE_LIST);
    if (location.pathname === `${UPDATE_LIST}2`) setValue(UPDATE_LIST);
    if (location.pathname === `${UPDATE_LIST}3`) setValue(UPDATE_LIST);
    if (location.pathname === `${UPDATE_LIST}4`) setValue(UPDATE_LIST);
    if (location.pathname === `${UPDATE_LIST}5`) setValue(UPDATE_LIST);
    if (location.pathname === `${UPDATE_LIST}6`) setValue(UPDATE_LIST);
    if (location.pathname === `${UPDATE_LIST}7`) setValue(UPDATE_LIST);
    if (location.pathname === `${UPDATE_LIST}8`) setValue(UPDATE_LIST);
    if (location.pathname === `${UPDATE_LIST}9`) setValue(UPDATE_LIST);

    if (location.pathname === `${DELETE_INFO}0`) setValue(DELETE_INFO);
    if (location.pathname === `${DELETE_INFO}1`) setValue(DELETE_INFO);
    if (location.pathname === `${DELETE_INFO}2`) setValue(DELETE_INFO);
    if (location.pathname === `${DELETE_INFO}3`) setValue(DELETE_INFO);
    if (location.pathname === `${DELETE_INFO}4`) setValue(DELETE_INFO);
    if (location.pathname === `${DELETE_INFO}5`) setValue(DELETE_INFO);
    if (location.pathname === `${DELETE_INFO}6`) setValue(DELETE_INFO);
    if (location.pathname === `${DELETE_INFO}7`) setValue(DELETE_INFO);
    if (location.pathname === `${DELETE_INFO}8`) setValue(DELETE_INFO);
    if (location.pathname === `${DELETE_INFO}9`) setValue(DELETE_INFO);
  }, [location.pathname]);

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
              <h1>Edit Blocked</h1>
            </div>
          </div>
        )}

        {value === `${UPDATE_LIST}` && (
          <div className={styles.container__first}>
            <div className={styles.title}>
              <h1>Edit Unlocked</h1>
            </div>
          </div>
        )}

        {value === DELETE && (
          <div className={styles.container__first}>
            <div className={styles.title}>
              <h1>Delete Blocked</h1>
            </div>
          </div>
        )}

        {value === `${DELETE_INFO}` && (
          <div className={styles.container__first}>
            <div className={styles.title}>
              <h1>Delete Unlocked</h1>
            </div>
          </div>
        )}

        {value === ERROR && (
          <div className={styles.container__first}>
            <div className={styles.title}>
              <h1>Error 404</h1>
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

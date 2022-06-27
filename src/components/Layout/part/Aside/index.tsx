// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useEffect, useState } from 'react';
import { IoCreateOutline } from 'react-icons/io5';
import { MdSystemUpdateAlt } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineRead, AiOutlineDelete } from 'react-icons/ai';
import { TbLockOff, TbLockOpen } from 'react-icons/tb';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import styles from './aside.module.scss';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { stylesTypes } from './types';

export const Aside = () => {
  const location = useLocation();

  const [value, setValue] = useState<stylesTypes>('/');

  const updatee =
    location.pathname !== '/' &&
    location.pathname !== '/Create' &&
    location.pathname !== '/Update' &&
    location.pathname !== '/Delete';

  useEffect(() => {
    if (location.pathname === '/') setValue('/');
    if (location.pathname === '/Create') setValue('/Create');
    if (location.pathname === '/Update') setValue('/Update');
    if (
      location.pathname !== '/' &&
      location.pathname !== '/Create' &&
      location.pathname !== '/Delete'
    )
      setValue(`/Update/list/`);
    if (location.pathname === '/Delete') setValue('/Delete');
  }, [location]);

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>
        <span className={styles.container__title__span}>C</span>rud -{' '}
        <span className={styles.container__title__span}>R</span>edux
      </h1>

      <section className={styles.container__section}>
        <div
          className={`${styles.container__div__main} ${
            value === '/' && styles.visible
          }`}
        >
          <Link to="/">
            <div className={styles.container__div}>
              <AiOutlineRead />
              Read
            </div>
          </Link>
        </div>

        <div
          className={`${styles.container__div__main} ${
            value === '/Create' && styles.visible
          }`}
        >
          <Link to="/Create">
            <div className={styles.container__div}>
              <IoCreateOutline />
              Create
            </div>
          </Link>
        </div>

        <div
          className={`${styles.container__div__main} ${
            value === '/Update/list/' && styles.visible
          }`}
        >
          <Link to="/Update">
            <div className={styles.container__div}>
              <MdSystemUpdateAlt />
              Update
              {updatee ? (
                <span className={styles.icon__open}>
                  <TbLockOpen />
                </span>
              ) : (
                <span className={styles.icon__close}>
                  <TbLockOff />
                </span>
              )}
            </div>
          </Link>
        </div>

        <div
          className={`${styles.container__div__main} ${
            value === '/Delete' && styles.visible
          }`}
        >
          <Link to="/Delete">
            <div className={styles.container__div}>
              <AiOutlineDelete />
              Delete
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

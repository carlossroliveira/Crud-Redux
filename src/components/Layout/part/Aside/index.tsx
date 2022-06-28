// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// -------------------------------------------------
// Icons
// -------------------------------------------------
import { IoCreateOutline } from 'react-icons/io5';
import { MdSystemUpdateAlt } from 'react-icons/md';
import { TbLockOff, TbLockOpen } from 'react-icons/tb';
import { AiOutlineRead, AiOutlineDelete } from 'react-icons/ai';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import styles from './aside.module.scss';
// -------------------------------------------------
// Types
// -------------------------------------------------
import {
  CREATE,
  DELETE,
  DELETE_INFO,
  READ,
  stylesTypes,
  UPDATE,
  UPDATE_LIST,
} from './types';

export const Aside = () => {
  const location = useLocation();

  const [value, setValue] = useState<stylesTypes>(READ);

  const path =
    location.pathname !== READ &&
    location.pathname !== CREATE &&
    location.pathname !== UPDATE &&
    location.pathname !== DELETE;

  useEffect(() => {
    if (location.pathname === READ) setValue(READ);
    if (location.pathname === CREATE) setValue(CREATE);
    if (location.pathname === UPDATE) setValue(UPDATE);
    if (location.pathname === DELETE) setValue(DELETE);
    /* if (
      location.pathname !== READ &&
      location.pathname !== CREATE &&
      location.pathname !== DELETE
    )
      setValue(UPDATE_LIST); */
    
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
            value === READ && styles.visible
          }`}
        >
          <Link to={READ}>
            <div className={styles.container__div}>
              <AiOutlineRead />
              Read
            </div>
          </Link>
        </div>

        <div
          className={`${styles.container__div__main} ${
            value === CREATE && styles.visible
          }`}
        >
          <Link to={CREATE}>
            <div className={styles.container__div}>
              <IoCreateOutline />
              Create
            </div>
          </Link>
        </div>

        <div
          className={`${styles.container__div__main} ${
            value === UPDATE_LIST && styles.visible
          }`}
        >
          <Link to={UPDATE}>
            <div className={styles.container__div}>
              <MdSystemUpdateAlt />
              Update
              {path ? (
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
            value === DELETE && styles.visible
          }`}
        >
          <Link to={DELETE}>
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

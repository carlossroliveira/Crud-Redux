// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { Link } from 'react-router-dom';
import { IoCreateOutline } from 'react-icons/io5';
import { MdSystemUpdateAlt } from 'react-icons/md';
import { AiOutlineRead, AiOutlineDelete } from 'react-icons/ai';
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

      <section className={styles.container__section}>
        <div className={styles.container__div__main}>
          <Link to="/">
            <div className={styles.container__div}>
              <AiOutlineRead />
              Read
            </div>
          </Link>
        </div>

        <div className={styles.container__div__main}>
          <Link to="/Create">
            <div className={styles.container__div}>
              <IoCreateOutline />
              Create
            </div>
          </Link>
        </div>

        <div className={styles.container__div__main}>
          <Link to="/Update">
            <div className={styles.container__div}>
              <MdSystemUpdateAlt />
              Update
            </div>
          </Link>
        </div>

        <div className={styles.container__div__main}>
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

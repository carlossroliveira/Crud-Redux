// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import styles from './error.module.scss';
// -------------------------------------------------
// Photo
// -------------------------------------------------
import photo from '../../assets/404.gif';

export const Error = () => {
  return (
    <section className={styles.section__main}>
      <img className={styles.image} src={photo} alt="404..." />

      <div className={styles.page_404}>
        <h1>This page does not exist</h1>

        <Link to={`/`}>
          <Button className={styles.button} text={'Go Read'} />
        </Link>
      </div>
    </section>
  );
};

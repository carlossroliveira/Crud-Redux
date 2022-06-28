// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { useNavigate } from 'react-router-dom';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Toast } from '../../function/Toast';
import { NamePage } from '../../components/NamePage';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import styles from './delete.module.scss';

export const Delete = () => {
  const NAVIGATION = useNavigate();

  Toast(5000, 'warning', 'Targeted in 5 seconds to read');

  setTimeout(() => {
    NAVIGATION('/');
  }, 5000);

  return (
    <div>
      <NamePage title="Delete" />

      <section className={styles.section}>
        <h1 className={styles.section__title}>[ Blocked Page ]</h1>

        <h3>First, select the person you want to delete information from.</h3>
        <h3>Navigate to the reading page.</h3>
      </section>
    </div>
  );
};

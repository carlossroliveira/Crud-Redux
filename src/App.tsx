// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { RoutesComponent } from './RoutesComponent';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import styles from './styles/global.module.scss';

export const App = () => {
  return (
    <section className={styles.container}>
      <RoutesComponent />
    </section>
  );
};

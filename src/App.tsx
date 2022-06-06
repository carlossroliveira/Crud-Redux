// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { RoutesComponent } from './routesComponent';
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

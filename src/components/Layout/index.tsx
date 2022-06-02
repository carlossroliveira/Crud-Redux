// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import styles from './layout.module.scss';
import { Aside } from './part/Aside';
import { Content } from './part/Content';
import { Header } from './part/Header';
import { StyleOne } from './part/StyleOne';
import { StyleTwo } from './part/StyleTwo';

export const Layout = () => {
  return (
    <div className={styles.container}>
      <StyleOne />
      <StyleTwo />
      <Aside />
      <Header />
      <Content />
    </div>
  );
};

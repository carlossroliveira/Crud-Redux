// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Aside } from './part/Aside';
import { Content } from './part/Content';
import { Header } from './part/Header';
import { StyleOne } from './part/StyleOne';
import { StyleTwo } from './part/StyleTwo';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import styles from './layout.module.scss';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { ILayoutProps } from './types';

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className={styles.container}>
      <StyleOne />
      <StyleTwo />
      <Aside />
      <Header />
      <Content>{children}</Content>
    </div>
  );
};

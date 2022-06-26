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

export const Layout = (props: ILayoutProps) => {
  return (
    <div className={styles.container}>
      <StyleOne />
      <StyleTwo />
      <Aside />
      <Header filter={props.filter} setFilter={props.setFilter} />
      <Content>{props.children}</Content>
    </div>
  );
};

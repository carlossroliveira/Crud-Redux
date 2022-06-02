// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import styles from './content.module.scss';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { IContentProps } from './type';

export const Content = ({ children }: IContentProps) => {
  return <div className={styles.container}>{children}</div>;
};

// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useEffect } from 'react';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { INamePage } from './types';

export const NamePage = ({ title }: INamePage) => {
  useEffect(() => {
    document.title = `Crud - ${title}`;
  }, [title]);
  return <></>;
};

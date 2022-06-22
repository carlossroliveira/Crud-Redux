// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useEffect } from 'react';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { INamePageProps } from './types';

export const NamePage = ({ title }: INamePageProps) => {
  useEffect(() => {
    document.title = `Crud - ${title}`;
  }, [title]);
  return <></>;
};

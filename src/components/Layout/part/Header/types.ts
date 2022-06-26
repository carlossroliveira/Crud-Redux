// -------------------------------------------------
// Types
// -------------------------------------------------
import { Dispatch } from 'react';

export interface IHeaderProps {
  filter: string;
  setFilter: Dispatch<React.SetStateAction<string>>;
}

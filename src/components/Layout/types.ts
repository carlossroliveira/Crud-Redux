// -------------------------------------------------
// Types
// -------------------------------------------------
import { Dispatch, ReactNode } from 'react'
export interface ILayoutProps {
  children: ReactNode;
  filter: string;
  setFilter: Dispatch<React.SetStateAction<string>>;
}

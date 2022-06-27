// -------------------------------------------------
// Types
// -------------------------------------------------
import { ChangeEvent } from 'react'

export interface IInputProps {
  name: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
}
import { IDisabled } from './IDisabled';
import React from 'react';

export interface ITextfield extends IDisabled {
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

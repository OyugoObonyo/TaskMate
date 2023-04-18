import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextfield } from './interfaces/ITextfield';
import PropTypes from 'prop-types';

export const TaskDescriptionField: FC<ITextfield> = (props): ReactElement => {
  const {
    onChange = (e) => console.log('Typed: ', e.target.value),
    disabled = false,
  } = props;

  return (
    <TextField
      id="description"
      name="description"
      label="Description"
      placeholder="Description"
      variant="outlined"
      size="small"
      multiline
      rows={4}
      fullWidth
      onChange={onChange}
      disabled={disabled}
    />
  );
};

TaskDescriptionField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

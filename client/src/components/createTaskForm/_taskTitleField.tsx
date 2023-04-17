import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextfield } from './interfaces/ITextfield';
import PropTypes from 'prop-types';

export const TaskTitleField: FC<ITextfield> = (props): ReactElement => {
  const {
    onChange = (e) => console.log('Typed: ', e.target.value),
    disabled = false,
  } = props;
  return (
    <TextField
      id="title"
      label="Task Title"
      placeholder="Task Title"
      variant="outlined"
      size="small"
      name="title"
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};

TaskTitleField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

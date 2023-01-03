import React, { FC, ReactElement } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { ISelectField } from './interfaces/ISelectField';
import PropTypes from 'prop-types';

export const TaskSelectField: FC<ISelectField> = (props): ReactElement => {
  // Destructure
  const {
    value = '',
    label = 'Select Box',
    name = 'SelectBox',
    items = [{ value: '', label: 'Add Items' }],
    disabled = false,
    onChange = (e) => console.log(e),
  } = props;

  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        value={value}
        label={label}
        name={name}
        onChange={onChange}
        disabled={disabled}
      >
        {items.map((item, index) => (
          <MenuItem key={item.value + index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

TaskSelectField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

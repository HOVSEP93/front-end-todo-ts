import React, { FC, ReactElement } from 'react';
import { Typography, Box } from '@mui/material';
import { ITaskDescription } from './interfaces/ITaskDescription';
import PropTypes from 'prop-types';

export const TaskDescription: FC<ITaskDescription> = (props): ReactElement => {
  // Destructure
  const { description = 'Lorem ipsum dolor sit amet consectetur, default' } =
    props;
  return (
    <Box>
      <Typography>{description} </Typography>
    </Box>
  );
};

TaskDescription.propTypes = {
  description: PropTypes.string,
};

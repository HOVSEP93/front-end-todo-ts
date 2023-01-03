import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { ITaskCounter } from './interfaces/ITaskCounter';
import PropTypes from 'prop-types';
import { Status } from '../createTaskForm/enums/Status';
import { EmitCorrectBorderColor } from './helpers/EmitCorrectBorderColor';
import { EmitCorrectLabel } from './helpers/EmitCorrectLabel';

export const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
  // Destructure
  const { count = 0, status = Status.completed } = props;

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            border: '5px solid',
            width: '96px',
            height: '96px',
            marginBottom: '16px',
            borderColor: `${EmitCorrectBorderColor(status)}`,
          }}
        >
          <Typography color="#ffffff" variant="h4">
            {count}
          </Typography>
        </Avatar>
        <Typography
          color="#ffffff"
          variant="h5"
          fontWeight="bold"
          fontSize="20px"
        >
          {EmitCorrectLabel(status)}
        </Typography>
      </Box>
    </>
  );
};

TaskCounter.propTypes = {
  count: PropTypes.number,
  status: PropTypes.oneOf([Status.todo, Status.inProgress, Status.completed]),
};

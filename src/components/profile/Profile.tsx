import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

// Interface
interface IProfile {
  name?: string;
}

export const Profile: FC<IProfile> = (props): ReactElement => {
  // Distrusting
  const { name = 'Hovsep' } = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {/* Avatar */}
      <Avatar
        sx={{
          width: '96px',
          height: '96px',
          backgroundColor: 'primary.main',
          marginBottom: '16px',
        }}
      >
        <Typography variant="h4" color="text.primary">
          {`${name.substring(0, 1)}`}
        </Typography>
      </Avatar>
      {/* Name */}
      <Typography variant="h6" color="text.primary">
        {`Welcome, ${name}`}
      </Typography>
      {/* Welcome Message */}
      <Typography variant="body1" color="text.primary">
        This your personal task
      </Typography>
    </Box>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
};

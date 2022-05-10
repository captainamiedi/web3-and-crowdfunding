import React from 'react'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ProgressBar() {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={60} givenAmount={1.2} goal='4' />
    </Box>
  )
}

function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ minWidth: 70 }}>
          <Typography variant="body2" color="text.secondary">{`${
            props.givenAmount
          } ETH`}</Typography>
        </Box>
        <Box sx={{ width: '100%', mr: 1, ml: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 70 }}>
          <Typography variant="body2" color="text.secondary">{`${
            props.goal
          } ETH`}</Typography>
        </Box>
      </Box>
    );
  }
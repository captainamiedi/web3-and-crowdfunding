import React from 'react'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ProgressBar({givenAmount, goal}) {

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={Math.round((givenAmount / goal) * 100)} givenAmount={givenAmount} goal={goal} />
    </Box>
  )
}

function LinearProgressWithLabel(props) {
  console.log(props.value);
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
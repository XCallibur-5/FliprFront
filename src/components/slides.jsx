import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '#####.**',
  },
  {
    value: 100,
    label: '#####.**',
  },
];


export default function DiscreteSliderMarks() {
  return (
    <Box sx={{ width: 300, paddingLeft:'8%' }}>
      <Slider
        aria-label="Custom marks"
        size="small"
        defaultValue={20}
        valueLabelDisplay="auto"
        marks={marks}
        disabled
      />
    </Box>
  );
}

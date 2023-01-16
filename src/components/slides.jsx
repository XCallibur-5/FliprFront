import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import _ from 'lodash';

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
  const [folio, setFolio] = React.useState('BSE');
  const [endPt, setEndPt] = React.useState('bse');

  React.useEffect(() => {
  const items = JSON.parse(localStorage.getItem('dataKey'));
  if (items) {
   setFolio(items);
   setEndPt(_.camelCase(items));
  }
}, []);

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

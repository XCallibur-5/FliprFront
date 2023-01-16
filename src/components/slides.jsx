import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import _ from 'lodash';



export default function DiscreteSliderMarks(props) {
  const [folio, setFolio] = React.useState('BSE.NS');

//   React.useEffect(() => {
//   const items = JSON.parse(localStorage.getItem('dataKey'));
//   if (items) {
//    setFolio(items);
//   }
// }, []);
    const marks = [
    {
      value: 0,
      label: props?.low,
    },
    {
      value: 100,
      label: props?.high,
    },
  ];
  return (
    <Box sx={{ width: 300, paddingLeft:'8%' }}>
      <Slider
        aria-label="Custom marks"
        size="small"
        defaultValue= {props?.def}
        valueLabelDisplay="auto"
        marks={marks}
        disabled
      />
    </Box>
  );
}

import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function ButtonGrp() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ margin:'2% 0 2% 4%'}}>
      <Button color="secondary" variant="outlined"  size="small" sx={{color: '#424242'}}>NSE</Button>
      <Button color="secondary" variant="outlined"  size="small" sx={{color: '#424242'}}>BSE</Button>
      <Button color="secondary" disabled>Options</Button>
    </ButtonGroup>
  );
}

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall() {
  const [folio, setFolio] = React.useState('BSE');

  const handleChange = (e) => {
    localStorage.setItem('dataKey', JSON.stringify(e.target.value));
    window.location.reload(false);
  };
   
  React.useEffect(() => {
    const items = JSON.parse(localStorage.getItem('dataKey'));
    if (items) {
     setFolio(items);
    }
  }, [folio]);

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="select-small">Listing</InputLabel>
      <Select
        labelId="select-small"
        id="select-small"
        value={folio}
        label="Listing"
        onChange={handleChange}
      >
        <MenuItem value={'BSE'}>BSE</MenuItem>
        <MenuItem value={'NSE'}>NSE</MenuItem>
        <MenuItem value={'Ashok Leyland'}>Ashok Leyland</MenuItem>
        <MenuItem value={'Cipla'}>Cipla</MenuItem>
        <MenuItem value={'Eicher Motors'}>Eicher Motors</MenuItem>
        <MenuItem value={'Reliance'}>Reliance</MenuItem>
        <MenuItem value={'Tata Steel'}>Tata Steel</MenuItem>
      </Select>
    </FormControl>
  );
}
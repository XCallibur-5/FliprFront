import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall() {
  const [age, setAge] = React.useState('');

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="select-small">Listing</InputLabel>
      <Select
        labelId="select-small"
        id="select-small"
        value={age}
        label="Listing"
        onChange={handleChange}
      >
        <MenuItem value={1}>BSE</MenuItem>
        <MenuItem value={2}>NSE</MenuItem>
        <MenuItem value={3}>Ashok Leyland</MenuItem>
        <MenuItem value={4}>Cipla</MenuItem>
        <MenuItem value={5}>Eicher Motors</MenuItem>
        <MenuItem value={6}>Reliance</MenuItem>
        <MenuItem value={7}>Tata Steel</MenuItem>
      </Select>
    </FormControl>
  );
}
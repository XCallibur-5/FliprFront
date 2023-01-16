import * as React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function registration(){
    return (
        <Box sx={{textAlign:'center', margin:'40% 20%', borderStyle:'double', padding:'5%'}}>
            <Typography variant="h6" sx={{padding:'1% 4% 0 4%'}} gutterBottom>
                Register
            </Typography>
            <TextField id="standard-basic" label="Login Id" variant="standard" type="User Name" required />
            <br />
            <TextField id="standard-basic" label="Login Id" variant="standard" type="email" required />
            <br />
            <TextField
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
            />
            <br /><br />
            <Button variant="contained">Register</Button>
        </Box>
    )
}
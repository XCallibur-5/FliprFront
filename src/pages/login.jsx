import * as React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function login(){
    return (
        <Box sx={{textAlign:'center', margin:'40% 20%', borderStyle:'double', padding:'5%'}}>
            <Typography variant="h6" sx={{padding:'1% 4% 0 4%'}} gutterBottom>
                Login
            </Typography>
            <TextField id="standard-basic" label="Login Email" variant="standard" type="email" required />
            <br />
            <br />
            <TextField
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                required
            />
            <br /><br />
            <Button variant="contained">Login</Button>
        </Box>
    )
}
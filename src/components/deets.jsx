import * as React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import DayView from './slides'

export default function Insight() {
    return (
      <Box sx={{paddingLeft:'5%' }}>
        <Typography variant="h5" gutterBottom>
            <b>NIFTY 50</b>
        </Typography>
        <Divider light sx={{ borderBottomWidth: 5, width: '95%' }} />
        <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography variant="h4" gutterBottom>
              <b>#####.**</b>
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ color: 'green' }}>
              <ArrowCircleUpOutlinedIcon /><b>#####.**</b>
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ color: 'red' }}>
              <ArrowCircleDownOutlinedIcon /><b>#####.**</b>
          </Typography>
          <Typography variant="caption" gutterBottom sx={{ color: 'grey',  }}>
              As on 13 Jan, 2023 16:10 IST
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="p" gutterBottom sx={{ color: 'grey', paddingLeft:'2.5%' }}>
              Day Range:-
          </Typography>
          <DayView />
          <Typography variant="p" gutterBottom sx={{ color: 'grey', paddingLeft:'2.5%'}}>
              52-Week Range:-
          </Typography>
          <DayView />
        </Grid>
      </Grid>
      <Divider light sx={{ borderBottomWidth: 5, width: '95%', paddingTop:'5%'}} />
      </Box>
    );
  }
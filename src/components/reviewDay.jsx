import * as React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import _ from 'lodash';

export default function Insight() {
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
      <Box sx={{margin:'4% 0'}}>
        <Typography variant="h6" sx={{padding:'1% 4% 0 4%'}} gutterBottom>
            <b>{ folio }</b>
        </Typography>

        <Divider sx={{ margin:'2% 2%' }}/>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8} md={3}>
              <Box sx={{paddingLeft:'15%' ,textAlign:'left'}}>
                  <Box>
                    <Typography variant="p" sx={{ color:'grey',  borderBottomStyle:'dashed' }} gutterBottom>
                      Open
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="p" sx={{ color:'grey',  borderBottomStyle:'dashed' }} gutterBottom>
                      Previous Close
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="p" sx={{ color:'grey',  borderBottomStyle:'dashed' }} gutterBottom>
                      Day High
                    </Typography>
                  </Box>
              </Box>
            </Grid>
            <Grid item xs={4} md={3}>
              <Box sx={{textAlign:'left'}}>
                  <Box>
                    <Typography variant="p" gutterBottom>
                      <b>xxxxx.##</b>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="p" gutterBottom>
                      <b>xxxxx.##</b>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="p" gutterBottom>
                      <b>xxxxx.##</b>
                    </Typography>
                  </Box>
              </Box>
            </Grid>
            <Grid item xs={8} md={3}>
              <Box sx={{paddingLeft:'15%' ,textAlign:'left'}}>
                  <Box>
                    <Typography variant="p" sx={{ color:'grey',  borderBottomStyle:'dashed' }} gutterBottom>
                      Day Low
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="p" sx={{ color:'grey',  borderBottomStyle:'dashed' }} gutterBottom>
                      52 Week High
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="p" sx={{ color:'grey',  borderBottomStyle:'dashed' }} gutterBottom>
                      52 Week Low
                    </Typography>
                  </Box>
              </Box>
            </Grid>
            <Grid item xs={4} md={3}>
              <Box sx={{textAlign:'left'}}>
                  <Box>
                    <Typography variant="p" gutterBottom>
                      <b>xxxxx.##</b>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="p" gutterBottom>
                      <b>xxxxx.##</b>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="p" gutterBottom>
                      <b>xxxxx.##</b>
                    </Typography>
                  </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    )}
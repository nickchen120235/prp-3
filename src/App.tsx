import React, { useState } from 'react'
import { CssBaseline, AppBar, Toolbar, Paper, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Switch } from '@material-ui/core'

import { PercentageGraph } from './components/PercentageGraph'
import { PriceGraph } from './components/PriceGraph'
import { LengthGraph } from './components/LengthGraph'
import { OccupancyGraph } from './components/OccupancyGraph'

import { AppStyles } from './utils/styles'
import { selectorOptions, selectorLabel } from './utils/consts'

const App = () => {
  const [selected, setSelected] = useState('gender')
  const [convention, setConvention] = useState(false)

  const classes = AppStyles()
  return (
    <>
      <CssBaseline />
      <AppBar elevation={0}>
        <Toolbar>
          <Typography className={classes.appbar} variant='h4'>PRP Assignment 3</Typography>
          <FormControlLabel className={classes.switch} control={<Switch checked={convention} onChange={() => setConvention(prev => !prev)} />} label='Convention Only' />
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Paper className={classes.graph}>
        <Typography variant='h5' align='center'>Percentage of Customers</Typography>
        <FormControl>
          <FormLabel component='legend' style={{marginLeft: '5px'}}>VIEW MODE</FormLabel>
          <RadioGroup row value={selected} onChange={(e, value) => {setSelected(value)}}>
            {selectorOptions.map((value, index) => <FormControlLabel key={index} value={value} control={<Radio />} label={selectorLabel[index]} style={{marginLeft: '5px'}} />)}
          </RadioGroup>
        </FormControl>
        <PercentageGraph mode={selected} convention={convention} />
      </Paper>
      <Paper className={classes.graph}>
        <Typography variant='h5' align='center'>Price</Typography>
        <PriceGraph convention={convention} />
      </Paper>
      <Paper className={classes.graph}>
        <Typography variant='h5' align='center'>Length of Stay</Typography>
        <LengthGraph convention={convention} />
      </Paper>
      <Paper className={classes.graph}>
        <Typography variant='h5' align='center'>Occupancy</Typography>
        <OccupancyGraph convention={convention} />
      </Paper>
    </>
  )
}

export default App
import React, { useState } from 'react'
import { CssBaseline, Paper, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'

import { TitleBar } from './components/TitleBar'
import { PercentageGraph } from './components/PercentageGraph'
import { PriceGraph } from './components/PriceGraph'

import { AppStyles } from './utils/styles'
import { selectorOptions, selectorLabel } from './utils/consts'

const App = () => {
  const [selected, setSelected] = useState('gender')

  const classes = AppStyles()
  return (
    <>
      <CssBaseline />
      <TitleBar title='PRP Assignment 3' />
      <Paper className={classes.graph}>
        <Typography variant='h5' align='center'>Percentage of Customers</Typography>
        <FormControl>
          <FormLabel component='legend' style={{marginLeft: '5px'}}>VIEW MODE</FormLabel>
          <RadioGroup row value={selected} onChange={(e, value) => {setSelected(value)}}>
            {selectorOptions.map((value, index) => <FormControlLabel key={index} value={value} control={<Radio />} label={selectorLabel[index]} style={{marginLeft: '5px'}} />)}
          </RadioGroup>
        </FormControl>
        <PercentageGraph mode={selected} />
      </Paper>
      <Paper className={classes.graph}>
        <Typography variant='h5' align='center'>Price</Typography>
        <PriceGraph />
      </Paper>
    </>
  )
}

export default App
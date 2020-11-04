import React, { useState } from 'react'
import { CssBaseline, AppBar, Toolbar, Paper, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Switch, Tab, Tabs } from '@material-ui/core'

import { PercentageGraph } from './components/PercentageGraph'
import { PriceGraph } from './components/PriceGraph'
import { LengthGraph } from './components/LengthGraph'
import { OccupancyGraph } from './components/OccupancyGraph'

import { AppStyles } from './utils/styles'
import { selectorOptions, selectorLabel, lineSelectorLabel } from './utils/consts'

const App = () => {
  const [percentSelected, setPercentSelected] = useState('gender')
  const [convention, setConvention] = useState(false)
  const [lineSelected, setLineSelected] = useState(0)
  const lineGraphs = [<PriceGraph key={0} convention={convention} />, <LengthGraph key={1} convention={convention} />, <OccupancyGraph key={2} convention={convention} />]

  const handleLineChange = (e: React.ChangeEvent<Record<string, unknown>>, newValue: number) => setLineSelected(newValue)

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
          <RadioGroup row value={percentSelected} onChange={(e, value) => {setPercentSelected(value)}}>
            {selectorOptions.map((value, index) => <FormControlLabel key={index} value={value} control={<Radio />} label={selectorLabel[index]} style={{marginLeft: '5px'}} />)}
          </RadioGroup>
        </FormControl>
        <PercentageGraph mode={percentSelected} convention={convention} />
      </Paper>
      <Paper className={classes.graph}>
        <Tabs centered value={lineSelected} onChange={handleLineChange}>
          {lineSelectorLabel.map(value => <Tab key={value} label={value} />)}
        </Tabs>
        <Typography variant='h5' align='center'>{lineSelectorLabel[lineSelected]}</Typography>
        {lineGraphs[lineSelected]}
      </Paper>
    </>
  )
}

export default App
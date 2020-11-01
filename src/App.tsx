import React, { useState } from 'react'
import { CssBaseline, Paper, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'

import { TitleBar } from './component/TitleBar'
import { Graph } from './component/Graph'
import styles from './style/App'

const selectorOptions = ['gender', 'location', 'type', 'reserve', 'age']

const App = () => {
  const [selected, setSelected] = useState('gender')

  const classes = styles()
  return (
    <>
      <CssBaseline />
      <TitleBar title='PRP Assignment 3' />
      <Paper className={classes.graph}>
        <Typography variant='h5' align='center'>Percentage of Customers</Typography>
        <FormControl>
          <FormLabel component='legend' style={{marginLeft: '5px'}}>VIEW MODE</FormLabel>
          <RadioGroup row value={selected} onChange={(e, value) => {setSelected(value)}}>
            {selectorOptions.map((value, index) => <FormControlLabel key={index} value={value} control={<Radio />} label={value} style={{marginLeft: '5px'}} />)}
          </RadioGroup>
        </FormControl>
        <Graph />
      </Paper>
    </>
  )
}

export default App
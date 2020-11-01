import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

import { TitleStyles } from '../utils/styles'
import { TitleBarProps } from '../utils/types' 

export const TitleBar = (props: TitleBarProps) => {
  const classes = TitleStyles()
  return (
    <>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography variant='h4'>{props.title}</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
} 
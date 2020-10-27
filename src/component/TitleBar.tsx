import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

import styles from '../style/TitleBar'

interface TitleBarProps {
  title: string
}

export const TitleBar = (props: TitleBarProps) => {
  const classes = styles()
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
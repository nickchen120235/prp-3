import React, { useEffect, useRef, useState } from 'react'
import { CssBaseline, Fab, MenuItem, Popper, Grow, Paper, ClickAwayListener, MenuList } from '@material-ui/core'
import { Settings } from '@material-ui/icons'

import { TitleBar } from './component/TitleBar'
import styles from './style/App'

const selectorOptions = ['from', 'location', 'type', 'reserve', 'age']

const App = () => {
  const [selected, setSelected] = useState(0)
  const [open, setOpen] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const anchorRef = useRef<any>(null)

  const handleClick = () => {
    setOpen((prev) => !prev)
  }
  const handleClose = (e: React.MouseEvent<Document|HTMLElement>) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) return

    setOpen(false)
  }

  const prevOpen = useRef(open)
  useEffect(() => {
    if (prevOpen.current && !open) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  const classes = styles()
  return (
    <>
      <CssBaseline />
      <TitleBar title='PRP Assignment 3' />
      <Fab className={classes.fab}color='primary' variant='extended' size='medium' onClick={handleClick} ref={anchorRef}>
        <Settings />{`Current settings: ${selectorOptions[selected]}`}
      </Fab>
      <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom'? 'center top': 'center bottom'}}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open}>
                  {selectorOptions.map((value, index) => <MenuItem key={index} onClick={(e) => {setSelected(index); handleClose(e)}} selected={selected === index}>{value}</MenuItem>)}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      <p>Hello React!</p>
    </>
  )
}

export default App
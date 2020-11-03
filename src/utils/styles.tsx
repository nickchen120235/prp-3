import { makeStyles } from '@material-ui/core/styles'

export const AppStyles = makeStyles(() => ({
  graph: {
    margin: '20px',
    width: 'auto',
    columnCount: 1
  },
  appbar: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  switch: {
    position: 'absolute',
    right: '5px'
  }
}))
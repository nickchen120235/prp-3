import { makeStyles } from '@material-ui/core/styles'

export const AppStyles = makeStyles(() => ({
  fab: {
    position: 'absolute',
    bottom: '5px',
    right: '5px'
  },
  graph: {
    margin: '20px',
    width: 'auto',
    columnCount: 1
  }
}))

export const TitleStyles = makeStyles(() => ({
  appbar: {
    alignItems: 'center'
  }
}))
import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => {
  return {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.up('lg')]: {
        justifyContent: 'space-between',
      }
    }
  }
})

export { useStyles }

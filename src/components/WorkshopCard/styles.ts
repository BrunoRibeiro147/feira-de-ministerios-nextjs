import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles<Theme>((theme: Theme) => {
  return {
    card: {
      maxWidth: 345,
      marginBottom: 21,
      backgroundColor: '#FFF',
      textAlign: 'start',
    },

    disableHoverCard: {
      '&:hover': {
        cursor: 'auto',
        background: '#fff',
      }
    },

    cardTitle: {
      fontFamily: 'Montserrat',
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: 14,
      fontWeight: 600,
      lineHeight: '19px'
    },

    cardRequirement: {
      marginTop: 16,
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 400,
      lineHeight: '19px',
    },

    cardSubtitle: {
      marginTop: 8,
      fontFamily: 'Source Sans Pro',
      fontSize: 12,
      lineHeight: '18px',
      listStyleType: 'none'
    },

    cardButton: {
      marginTop: 8,
      height: 40,
      width: '100%',
      backgroundColor: '#D05812',
      color: theme.palette.background.paper,
      borderRadius: 6,
      '&:hover': {
        backgroundColor: '#D05812',
      },
    },

    cardButtonText: {
      fontFamily: 'Montserrat',
      fontSize: 16,
      lineHeight: '23px',
      fontWeight: 700,
      color: theme.palette.background.paper
    },
  }
})

export { useStyles }

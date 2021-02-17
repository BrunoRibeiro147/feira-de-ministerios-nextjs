import { makeStyles, Theme } from '@material-ui/core'
import { red } from '@material-ui/core/colors';

interface IMakeStyles {
  finished: boolean;
}

const useStyles = makeStyles<Theme, IMakeStyles>((theme: Theme) => {
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

    cardButton: props => ({
      marginTop: 8,
      height: 40,
      width: '100%',
      backgroundColor: !props.finished ? theme.palette.primary.main : red[600],
      color: theme.palette.background.paper,
      borderRadius: 6,
      '&:hover': {
        backgroundColor: !props.finished ? '#D9A933' : red[700],
      },
    }),

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

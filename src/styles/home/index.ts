import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => {
  return {
    container: {
      padding: '30px 0',
      margin: '0 8%',
      [theme.breakpoints.up('lg')]: {
        margin: '0 240px',
      },
    },

    welcomeContainer: {
      marginTop: 120,
      [theme.breakpoints.up('lg')]: {
        height: '65vh',
        marginTop: 130,
      },
    },

    row: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    title: {
      marginTop: 85,
      fontSize: 32,
      lineHeight: '39px',
      fontFamily: 'Montserrat',
      fontWeight: 'bold',
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        textAlign: 'start',
        fontSize: 64,
        lineHeight: '79px',
      },
    },

    subTitle: {
      marginTop: 32,
      fontSize: 20,
      lineHeight: '20px',
      fontFamily: 'Montserrat',
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        textAlign: 'start',
        fontSize: 40,
        lineHeight: '56px',
      },
    },

    attentionSection: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.palette.primary.main,
      height: 165,
      marginTop: 175,
      [theme.breakpoints.up('md')]: {
        height: 250,
      },
    },

    attentionSectionTitle: {
      fontSize: 20,
      lineHeight: '38px',
      fontFamily: 'Montserrat',
      fontWeight: 'bold',
      textAlign: 'center',
      color: theme.palette.background.paper,
      marginTop: 8,
      [theme.breakpoints.up('md')]: {
        fontSize: 40,
        lineHeight: '79px',
      },
    },

    attentionSectionsubTitle: {
      fontSize: 14,
      lineHeight: '21px',
      fontFamily: 'Montserrat',
      textAlign: 'center',
      fontWeight: 600,
      color: theme.palette.background.paper,
      margin: '0px 8px 14px 8px',
      // marginLeft: 8,
      // marginRight: 8,
      // marginBottom: 14,
      [theme.breakpoints.up('md')]: {
        fontSize: 24,
        lineHeight: '32px',
      },
    },

    informativeContainer: {
      [theme.breakpoints.up('lg')]: {
        height: '100vh',
      }
    },

    informativeTitle: {
      marginTop: 75,
      marginBottom: 42,
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontSize: 24,
      lineHeight: '28px',
      textAlign: 'center',
      color: theme.palette.text.secondary,
      [theme.breakpoints.up('md')]: {
        textAlign: 'start',
        marginTop: 150,
        fontSize: 40,
        lineHeight: '56px',
      },
    },

    requirementsSection: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: theme.palette.text.primary,
      height: 175,
      marginTop: 75,
      [theme.breakpoints.up('md')]: {
        height: 275,
      },
    },

    paragraph: {
      fontFamily: 'Source Sans Pro',
      fontSize: 12,
      lineHeight: '21px',
      fontWeight: 600,
      textAlign: 'start',
      color: theme.palette.text.primary,
      [theme.breakpoints.up('md')]: {
        fontSize: 20,
        lineHeight: '28px',
      },
    },

    paragraphWhite: {
      fontFamily: 'Source Sans Pro',
      fontSize: 12,
      lineHeight: '21px',
      fontWeight: 600,
      textAlign: 'center',
      color: theme.palette.background.paper,
      [theme.breakpoints.up('md')]: {
        textAlign: 'start',
        fontSize: 20,
        lineHeight: '28px',
      },
    },

    inputContainer: {
      marginTop: 45,
      marginBottom: 31,
    },

    searchInput: {
      height: 32,
      width: '95%',
      borderRadius: '8px 0 0 8px',
      backgroundColor: '#F2F0E9',
    },

    input: {
      marginLeft: 8,
      fontFamily: 'Montserrat',
      fontSize: 16,
      fontWeight: 700,
      lineHeight: '12px',
      color: '#BFB7A3',
      underline: {
        "&&&:before": {
          borderBottom: "none"
        },
        "&&:after": {
          borderBottom: "none"
        }
      }
    },

    searchIconContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#F0BB39',
      height: 32,
      width: 32,
      borderRadius: '0 8px 8px 0',
    },

    containerMe: {
      display: "flex",
      justifyContent: "center",
      marginTop: 24,
      textDecoration: 'none',
    },

    textMe: {
      fontSize: 14,
      fontWeight: 300,
      fontStyle: 'italic',
      color: 'grey',
    },

    imageAcademic: {
      height: 250,
      width: 250,
      [theme.breakpoints.up('md')]: {
        height: 450,
        width: 450,
      }
    }

  }
});

export { useStyles }

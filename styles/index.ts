import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => {
	return {
		container: {
			padding: '30px 0',
			textAlign: 'center',
			margin: '0 8%',
			[theme.breakpoints.up('md')]: {
				margin: '0 32%',
			},
		},

		title: {
			marginTop: 85,
			fontSize: 32,
			lineHeight: '39px',
			fontFamily: 'Montserrat',
			fontWeight: 'bold',
			textAlign: 'center'
		},

		subTitle: {
			marginTop: 32,
			fontSize: 20,
			lineHeight: '20px',
			fontFamily: 'Montserrat',
		},

		attentionSection: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			alignItems: 'center',
			backgroundColor: theme.palette.primary.main,
			height: 125,
			marginTop: 75,
		},

		attentionSectionTitle: {
			fontSize: 20,
			lineHeight: '38px',
			fontFamily: 'Montserrat',
			fontWeight: 'bold',
			textAlign: 'center',
			color: theme.palette.background.paper,
			marginTop: 8,
		},

		attentionSectionsubTitle: {
			fontSize: 14,
			lineHeight: '16px',
			fontFamily: 'Montserrat',
			textAlign: 'center',
			fontWeight: 600,
			color: theme.palette.background.paper,
			marginBottom: 14,
		},

		informativeTitle: {
			marginTop: 75,
			marginBottom: 42,
			fontFamily: 'Montserrat',
			fontWeight: 600,
			fontSize: 24,
			lineHeight: '28px',
			color: theme.palette.text.secondary
		},

		requirementsSection: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			backgroundColor: theme.palette.text.primary,
			height: 413,
			marginTop: 75,
		},

		paragraph: {
			fontFamily: 'Source Sans Pro',
			fontSize: 12,
			lineHeight: '21px',
			fontWeight: 600,
			textAlign: 'start',
			color: theme.palette.text.primary
		},

		paragraphWhite: {
			fontFamily: 'Source Sans Pro',
			fontSize: 12,
			lineHeight: '21px',
			fontWeight: 600,
			textAlign: 'start',
			color: theme.palette.background.paper
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
		}

	}
});

export { useStyles }
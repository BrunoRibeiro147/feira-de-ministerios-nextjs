import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => {
	return {
		card: {
			maxWidth: 345,
			marginBottom: 21,
			backgroundColor: '#FFF'
		},

		cardTitle: {
			fontFamily: 'Montserrat',
			fontSize: 14,
			fontWeight: 600,
			lineHeight: '19px'
		},

		cardSubtitle: {
			marginTop: 8,
			fontFamily: 'Source Sans Pro',
			fontSize: 12,
			lineHeight: '18px',
		},

		cardButton: {
			marginTop: 8,
			height: 40,
			width: '100%',
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.background.paper,
			borderRadius: 6,
			'&:hover': {
				backgroundColor: '#D9A933'
			},
		},

		cardButtonText: {
			fontFamily: 'Montserrat',
			fontSize: 16,
			lineHeight: '23px',
			fontWeight: 700,
			color: theme.palette.background.paper
		}
	}
})

export { useStyles }
import { createMuiTheme } from '@material-ui/core'

import { colors } from './colors'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: colors.yellow
		},
		secondary: {
			main: colors.gray1
		},
		background: {
			paper: colors.white,
		},
		text: {
			primary: colors.gray2,
		}
	}
})

export { theme };
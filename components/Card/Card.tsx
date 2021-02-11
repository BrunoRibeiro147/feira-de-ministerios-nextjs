import {
	Typography,
	Card as MaterialCard,
	CardActionArea,
	CardMedia,
	CardContent,
	Button,
	CardActions,
	Divider
} from '@material-ui/core'
import { useStyles } from './styles'


const Card: React.FC = () => {
	const classes = useStyles();

	return (
		<MaterialCard className={classes.card}>
			<CardActionArea>
				<CardMedia
					component="img"
					alt="Contemplative Reptile"
					height="192"
					image="/novajovens.png"
					title="Contemplative Reptile"
					style={{ padding: 12, objectFit: 'contain' }}
				/>
				<CardContent>
					<Typography className={classes.cardTitle}>
						Ministério de Música
          </Typography>
					<Typography className={classes.cardSubtitle}>
						Venha servir conosco!
          </Typography>
					<Typography className={classes.cardSubtitle}>
						Requisitos: 1 - 2 - 3 - 4 - 5 - 6 - 7
          </Typography>
				</CardContent>
				<Divider style={{ margin: '0 auto', width: '95%' }} />
			</CardActionArea>
			<CardActions>
				<Button className={classes.cardButton} >
					<Typography
						className={classes.cardButtonText}>
						Increva-se
					</Typography>
				</Button>
			</CardActions>
		</MaterialCard>
	);
}

export { Card }
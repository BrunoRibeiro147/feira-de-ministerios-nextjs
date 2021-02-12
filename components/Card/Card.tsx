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
import { ICardProps } from './types'


const Card: React.FC<ICardProps> = ({ title, requirements }) => {
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
						{title}
					</Typography>
					<Typography className={classes.cardRequirement}>
						Requisitos:
					</Typography>
					<ul style={{ padding: '0' }}>
						{requirements.map((requirement, index) => (
							<li
								key={index}
								className={classes.cardSubtitle}
							>
								{`- ${requirement}`}
							</li>
						))}
					</ul>
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
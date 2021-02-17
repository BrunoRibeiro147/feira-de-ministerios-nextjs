import {
  Typography,
  Card as MaterialCard,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  CardActions,
  Divider,
  Box,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import { useStyles } from './styles'
import { ICardProps } from './types'


const Card: React.FC<ICardProps> = (props) => {
  const { title, requirements, image, form, finished } = props;
  const classes = useStyles({ finished });
  const router = useRouter();

  const handleRedirectToForm = () => {
    if (!form) {
      return;
    }
    router.push(form);
  }

  return (
    <MaterialCard className={classes.card} elevation={4}>
      <CardActionArea className={classes.disableHoverCard}>
        <CardMedia
          component="img"
          alt="Ministério"
          height="192"
          image={image || '/novajovens.png'}
          title="Ministério"
          style={{ padding: 12, objectFit: 'contain' }}
        />
        <Divider style={{ opacity: 0.7 }} />
        <CardContent style={{ height: 270 }}>
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
                {`- ${requirement.text}`}
              </li>
            ))}
          </ul>
        </CardContent>
        <Divider />
      </CardActionArea>
      <CardActions>
        <Button
          className={classes.cardButton}
          onClick={() => { !finished && handleRedirectToForm() }}>
          <Typography
            className={classes.cardButtonText}>
            {!finished ? 'Increva-se' : 'Esgotado'}
          </Typography>
        </Button>
      </CardActions>
    </MaterialCard>
  );
}

export { Card }

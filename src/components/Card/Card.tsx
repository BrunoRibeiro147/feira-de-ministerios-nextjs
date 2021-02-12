import {
  Typography,
  Card as MaterialCard,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  CardActions,
  Divider
} from '@material-ui/core';
import { useRouter } from 'next/router';
import { useStyles } from './styles'
import { ICardProps } from './types'


const Card: React.FC<ICardProps> = (props) => {
  const { title, requirements, image, form } = props
  const classes = useStyles();
  const router = useRouter();

  const handleRedirectToForm = () => {
    if (!form) {
      return;
    }
    router.push(form);
  }

  return (
    <MaterialCard className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Ministério"
          height="192"
          image={image || '/novajovens.png'}
          title="Ministério"
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
                {`- ${requirement.text}`}
              </li>
            ))}
          </ul>
        </CardContent>
        <Divider style={{ margin: '0 auto', width: '95%' }} />
      </CardActionArea>
      <CardActions>
        <Button className={classes.cardButton} onClick={() => handleRedirectToForm()}>
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

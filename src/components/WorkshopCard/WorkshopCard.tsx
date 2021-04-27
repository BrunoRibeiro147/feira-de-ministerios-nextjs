import {
  Typography,
  Card as MaterialCard,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  CardActions,
  Divider,
} from '@material-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useStyles } from './styles'
import { ICardProps } from './types'


const WorkshopCard: React.FC<ICardProps> = (props) => {
  const { title, link, image } = props;
  const classes = useStyles();

  return (
    <MaterialCard className={classes.card} elevation={4}>
      <CardActionArea className={classes.disableHoverCard}>
        <CardMedia
          component="img"
          alt="Oficina"
          height="172"
          image={image || '/congresso_despertar.png'}
          title="Oficina"
          style={{ padding: 12, objectFit: 'contain' }}
        />
        <Divider style={{ opacity: 0.7 }} />
        <CardContent style={{ height: 70 }}>
          <Typography className={classes.cardTitle}>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link
          href={link}
          passHref
        >
          <Button
            className={classes.cardButton}
          >
            <Typography
              className={classes.cardButtonText}>
              Vá para Oficina
          </Typography>
          </Button>
        </Link>
      </CardActions>
    </MaterialCard>
  );
}

export { WorkshopCard }

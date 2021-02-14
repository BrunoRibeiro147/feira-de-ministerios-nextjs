import { Box } from '@material-ui/core'
import { useStyles } from './styles';

const Header: React.FC = () => {

  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box display={{ xs: 'none', lg: 'block' }}>
        <img src="/nib.png" alt="Nova Jovens" />
      </Box>
      <img src="/novajovens.png" alt="Nova Jovens" />
    </Box>
  );
}

export { Header };

import {
  Box,
  Typography,
} from '@material-ui/core';
import { useStyles } from '../styles/home/index';
import { Header } from '../components';

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.container}>
        <Header />
        <Box className={classes.welcomeContainer}>
          <Box className={classes.row}>
            <Box style={{ maxWidth: 620 }}>
              <Typography className={classes.title}>
                Nova Jovens Online
				      </Typography>
              <Typography className={classes.subTitle}>
                Suporte ao ministério <strong>nova jovens</strong> de forma online
				      </Typography>
            </Box>
            <Box display={{ xs: 'none', lg: 'block' }}>
              <img src="/blog_post.svg" alt="" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

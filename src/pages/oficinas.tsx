
import {
  Box,
  Typography,
} from '@material-ui/core';

import { useStyles } from '../styles/home';
import { Header } from '../components'


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
                Congresso Despertar
				      </Typography>
              <Typography className={classes.subTitle}>
                Oficinas que mudaram lhe despertar para um verdadeiro
                relacionamento com Deus
				      </Typography>
            </Box>
            <Box display={{ xs: 'none', lg: 'block' }}>
              <img src="/lightbulb.svg" alt="" height="485px" width="455px" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        className={classes.attentionSection}
        style={{ backgroundColor: '#D05812' }}
      >
        <Typography className={classes.attentionSectionTitle}>
          EM BREVE
        </Typography>
        <Typography className={classes.attentionSectionsubTitle}>
          Estamos finalizando os links com os treinamentos, em breve eles
          estarão disponíveis aqui
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;

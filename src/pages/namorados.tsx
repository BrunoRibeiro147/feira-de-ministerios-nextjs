import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Link from 'next/link'
import { useStyles } from '../styles/home/index';
import { Header, WorkshopCard } from '../components';

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
                Ministério de Namorados
				      </Typography>
              <Typography className={classes.subTitle}>
                Se você está namorando, preencha sua ficha para participar desse ministério incrível!
				      </Typography>
            </Box>
            <Box display={{ xs: 'none', lg: 'block' }}>
              <img src="/true_love.svg" alt="" height="485px" width="455px" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        className={classes.attentionSection}
        style={{ backgroundColor: '#FF6363', marginBottom: 19 }}
      >
        <Typography className={classes.attentionSectionTitle}>
          Preêncha sua Ficha!
				</Typography>
        <Typography
          className={classes.attentionSectionsubTitle}
          style={{ maxWidth: 910 }}
        >
          Não esqueça que essa ficha é somente para quem já está namorando,
          se você ainda irá começar um relacionamento, você ainda não preenche
				</Typography>
      </Box>

      <Box className={classes.container}>

        <Box display="flex" alignItems="center" justifyContent="center">
          <WorkshopCard
            key={'1'}
            title={'Inscrição dos Namorados'}
            link={'https://forms.gle/fcwzbzy3CuqTkMU59'}
            image={'/couple.jpg'}
            buttonText="Faça sua inscrição"
            buttonColor="#FF6363"
          />

        </Box>

        <Box marginTop="170px">
          <Link href="https://beacons.page/bruno_ribeiro">
            <a target="_blank" rel="noreferrer" className={classes.containerMe}>
              <Typography className={classes.textMe}>
                Criado por: Bruno Ribeiro
            </Typography>
            </a>
          </Link>

        </Box>


      </Box>
    </Box>
  );
}

export default Home;

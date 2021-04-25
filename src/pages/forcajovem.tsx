import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Link from 'next/link'
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
                Ministério Força Jovem
              </Typography>
              <Typography className={classes.subTitle}>
                Use sua força e energia para louvar a Cristo!
              </Typography>
            </Box>
            <Box display={{ xs: 'none', lg: 'block' }}>
              <img src="/be_the_hero.svg" alt="" height="485px" width="455px" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        className={classes.attentionSection}
        style={{ backgroundColor: '#F5000D' }}
      >
        <Typography className={classes.attentionSectionTitle}>
          Pré-Requisitos!
        </Typography>
        <Typography className={classes.attentionSectionsubTitle}>
          <ul style={{ textAlign: 'center', textDecoration: 'none' }}>
            <li>6 Meses de Nib</li>
            <li>Um com Deus</li>
            <li>Senib Ativo</li>
            <li>A partir de 16 Anos</li>
          </ul>
        </Typography>
      </Box>

      <Box className={classes.container}>

        <Box display="flex" alignItems="center" justifyContent="center">
          <img src="/forca_jovem.jpeg" className={classes.imageAcademic} />
        </Box>

        <Box display="flex" alignItems="center" justifyContent="center" marginTop="110px">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeLbdqmSjHFn_rMH9j9csYYpaYjL-OmqRGQYmJ7iKaJ-HR0hw/viewform?embedded=true"
            width="640"
            height="1175"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
          >
            Carregando…
					</iframe>
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

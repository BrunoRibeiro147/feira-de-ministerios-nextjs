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
                Feira de Clubes Bíblicos 2021
				      </Typography>
              <Typography className={classes.subTitle}>
                Escolha seu clube e espalhe Jesus em todo lugar!
				      </Typography>
            </Box>
            <Box display={{ xs: 'none', lg: 'block' }}>
              <img src="/education.svg" alt="" height="485px" width="455px" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        className={classes.attentionSection}
        style={{ backgroundColor: '#6C63FF' }}
      >
        <Typography className={classes.attentionSectionTitle}>
          Escolha seu Clube!
				</Typography>
        <Typography className={classes.attentionSectionsubTitle}>
          Não perca a oportudade de conhecer pessoas e levar Jesus em sua escola
          ou universidade
				</Typography>
      </Box>

      <Box className={classes.container}>

        <Box display="flex" alignItems="center" justifyContent="center">
          <img src="/nib_academic.jpeg" className={classes.imageAcademic} />
        </Box>

        <Box display="flex" alignItems="center" justifyContent="center" marginTop="110px">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScl5ToNghZIhmH5T4zcqFnQw-vmaAiPsxyFpGzD-pujwpP1fQ/viewform?embedded=true"
            width="640"
            height="1323"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}>
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

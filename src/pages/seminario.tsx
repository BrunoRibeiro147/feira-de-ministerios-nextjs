
import {
  Box,
  Typography,
  Grid
} from '@material-ui/core';

import { useStyles } from '../styles/home';
import { Header, WorkshopCard } from '../components'
import { GetStaticProps } from 'next';
import { client } from '../lib/prismic_workshops';
import { Document } from 'prismic-javascript/types/documents';
import Prismic from 'prismic-javascript';

interface IHomeProps {
  workshops: Document[]
}

const Home: React.FC<IHomeProps> = ({ workshops }) => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.container}>
        <Header />
        <Box className={classes.welcomeContainer}>
          <Box className={classes.row}>
            <Box style={{ maxWidth: 620 }}>
              <Typography className={classes.title}>
                Seminário Santidade
              </Typography>
              <Typography className={classes.subTitle}>
                Oficinas que irão lhe levar para um novo nível em seu
                relacionamento com Deus
              </Typography>
            </Box>
            <Box display={{ xs: 'none', lg: 'block' }}>
              <img src="/online_test.svg" alt="" height="485px" width="455px" style={{ objectFit: 'contain' }} />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        className={classes.attentionSection}
        style={{ backgroundColor: '#068b77' }}
      >
        <Typography className={classes.attentionSectionTitle}>
          Santidade
        </Typography>
        <Typography className={classes.attentionSectionsubTitle}>
          Que através dela possamos ver o mundo pela ótica de Cristo
        </Typography>
      </Box>

      <Box className={classes.container}>

        <Grid
          container
          justify="center"
          style={{ justifyContent: "space-between" }}
          spacing={4}
        >
          {workshops.map(workshop => (
            <Grid key={workshop.id} item lg={4} md={6} sm={12} xs={12}>
              <WorkshopCard
                key={workshop.id}
                title={workshop.data.oficina[0].text}
                link={workshop.data.link_oficina.url}
                image={"/logo_seminario.jpeg"}
                buttonColor="#068b77"
                disabled={workshop.data.inativo}
                comments={workshop.data.observacoes[0]?.text}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const response = await client().query(
    Prismic.Predicates.at('document.type', 'seminario'), { pageSize: 50 }
  );

  const data = response.results;

  return {
    props: {
      workshops: data,
    },
    revalidate: 2,
  }

};

export default Home;

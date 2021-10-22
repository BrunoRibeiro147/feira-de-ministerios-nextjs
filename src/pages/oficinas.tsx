
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
                Congresso Despertar
              </Typography>
              <Typography className={classes.subTitle}>
                Oficinas que lhe farão despertar para um verdadeiro
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
          DESPERTE
        </Typography>
        <Typography className={classes.attentionSectionsubTitle}>
          Nós somos soldados de Cristo, desperte e faça a diferença no Reino!
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
                image={workshop.data.image.url}
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
    Prismic.Predicates.at('document.type', 'oficina'), { pageSize: 50 }
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

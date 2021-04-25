import { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import {
  Grid,
  Box,
  Typography,
  TextField
} from '@material-ui/core';
import { FiSearch } from 'react-icons/fi';
import { useStyles } from '../styles/home/index';
import { Card, Header } from '../components';
import { client } from '../lib/prismic';
import { Document } from 'prismic-javascript/types/documents';
import Link from 'next/link'

interface IHomeProps {
  ministries: Document[]
}

const Home: React.FC<IHomeProps> = ({ ministries }) => {
  const classes = useStyles();

  const [ministriesQuery, setMinistriesQuery] = useState<Document[]>(ministries);

  const handleFilterMininstries = (name: string) => {
    if (name.length > 0) {
      const filteredMinistries =
        ministriesQuery.filter(row => row.data.title[0].text.includes(name));

      if (filteredMinistries.length > 0) {
        return setMinistriesQuery(filteredMinistries);
      } else {
        setMinistriesQuery(ministries)
      }
    }
    setMinistriesQuery(ministries)
  }

  return (
    <Box>
      <Box className={classes.container}>
        <Header />
        <Box className={classes.welcomeContainer}>
          <Box className={classes.row}>
            <Box style={{ maxWidth: 620 }}>
              <Typography className={classes.title}>
                Feira de Ministérios 2021
				      </Typography>
              <Typography className={classes.subTitle}>
                Escolha seu ministério e prepare-se para uma incrível jornada!
				      </Typography>
            </Box>
            <Box display={{ xs: 'none', lg: 'block' }}>
              <img src="/blog_post.svg" alt="" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={classes.attentionSection}>
        <Typography className={classes.attentionSectionTitle}>
          Atente-se as informações
				</Typography>
        <Typography className={classes.attentionSectionsubTitle}>
          Leia com atenção todas as informações antes de escolher seu ministério!
				</Typography>
      </Box>

      <Box className={classes.container}>
        <Box className={classes.informativeContainer}>
          <Box className={classes.row}>
            <Box style={{ maxWidth: 620 }}>
              <Typography className={classes.informativeTitle}>Informativos</Typography>
              <p className={classes.paragraph}>Servir a Deus é um <strong>grande
                privilégio!!!</strong> Leia com <strong>atenção</strong> quais são os
                ministérios disponíveis e inscreva-se naquele
                que acha que poderá participar com alegria e compromisso,
                exercitando os seus dons e talentos.
              </p>

              <p className={classes.paragraph}>Você será informado sobre o
              ministério em que foi inserido, passando por orientações de como
              funciona o ministério e treinamento se necessário.
				    	</p>

              <p className={classes.paragraph}>
                Verifique as informações sobre testes, envio de vídeos e
                principalmente os requisitos, para não acontecer de não
                ser selecionado. Cada jovem só pode se inscrever{" "}
                <strong>UMA VEZ</strong>. Não faça outra inscrição pois não
                valerá. <strong>SEMPRE VALERÁ A PRIMEIRA QUE VOCÊ FEZ</strong>,{" "}
                Por isso ore antes e faça com calma. Caso não tenha mais vaga,
                ou você não for aprovado, ou não preencher os requisitos,
                você poderá ser remetido a outro ministério que você indicou
                como outras opções no Formulário de Inscrição.
              </p>
            </Box>
            <Box display={{ xs: 'none', lg: 'block' }}>
              <img src="/ideas.svg" alt="" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={classes.requirementsSection}>
        <Typography className={classes.attentionSectionTitle}>
          Pré-Requisitos
				</Typography>
        <p className={classes.attentionSectionsubTitle}>
          Lembrando que os ministérios possuem pré-requisitos, então leia
          com bastante atenção, para não se candidatar a um ministério que
          você não atende e assim se frustar!
				</p>
      </Box>

      <Box className={classes.container}>
        <Box className={classes.inputContainer}>
          <Box display="flex" alignItems="center">
            <TextField
              className={classes.searchInput}
              InputProps={{ className: classes.input, disableUnderline: true }}
              placeholder="Pesquisar Ministério..."
              onChange={(e) => handleFilterMininstries(e.target.value)}
            />
            <Box className={classes.searchIconContainer}>
              <FiSearch size="21" color="#FFFCF5" />
            </Box>
          </Box>
        </Box>

        <Grid container justify="center" style={{ justifyContent: "space-between" }}>

          {ministriesQuery.map(ministry => (
            <Grid key={ministry.id} item lg={4} md={6} sm={12} xs={12} >
              <Card
                key={ministry.id}
                title={ministry.data.title[0].text}
                requirements={ministry.data.requirements}
                image={ministry.data.image.url}
                form={ministry.data.form.url}
                finished={ministry.data.finished}
              />
            </Grid>
          ))}
        </Grid>

        <Link href="https://beacons.page/bruno_ribeiro">
          <a target="_blank" rel="noreferrer" className={classes.containerMe}>
            <Typography className={classes.textMe}>
              Criado por: Bruno Ribeiro
            </Typography>
          </a>
        </Link>



      </Box>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {

  const response = await client().query("", { pageSize: 50 });

  const data = response.results;

  const ministries = data.sort((a, b) => a.data.title[0].text > b.data.title[0].text ? 1 : -1);

  return {
    props: {
      ministries,
    },
    revalidate: 2,
  }

};

export default Home;

import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import {
  Grid,
  Box,
  Typography,
  TextField
} from '@material-ui/core';
import { FiSearch } from 'react-icons/fi';
import { useStyles } from '../styles/index';
import { Card } from '../components/Card/Card';
import { IMinistry } from '../types/types';
import { client } from '../lib/prismic';
import { Document } from 'prismic-javascript/types/documents'

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
      <Grid container>
        <Grid item xs={12} className={classes.container}>
          <img src="/novajovens.png" alt="Nova Jovens" />
          <Typography className={classes.title}>
            Feira de Ministérios 2021
				</Typography>
          <Typography className={classes.subTitle}>
            Escolha seu ministério e prepare-se para uma incrível jornada!
				</Typography>
        </Grid>

        <Box className={classes.attentionSection}>
          <Typography className={classes.attentionSectionTitle}>
            Atente-se as informações
						</Typography>
          <Typography className={classes.attentionSectionsubTitle}>
            Leia com atenção todas as informações antes de escolher seu ministério!
						</Typography>
        </Box>

        <Box className={classes.container}>
          <Typography className={classes.informativeTitle}>Informativos</Typography>
          <p className={classes.paragraph}>Servir a Deus é um <strong>grande
					privilégio!!!</strong> Leia com <strong>atenção</strong> quais são os
					ministérios disponíveis e inscreva-se naquele(s)
					que acha que poderá participar com alegria e compromisso,
					exercitando os seus dons e talentos.
					</p>

          <p className={classes.paragraph}>Você será informado sobre o
          ministério em que foi inserido, passando por orientações de como
          funciona o ministério e treinamento se necessário.
					</p>

          <p className={classes.paragraph}>Inscreva-se em até{' '}
            <strong>4 ministérios</strong>, indicando-os conforme abaixo:
					</p>

          <p className={classes.paragraph}><strong>Primeira Opção:</strong> para
					o que mais gostaria de fazer;
					</p>

          <p className={classes.paragraph}><strong>Segunda Opção;</strong></p>

          <p className={classes.paragraph}><strong>Terceira Opção;</strong></p>

          <p className={classes.paragraph}><strong>Quarta Opção.</strong></p>

          <p className={classes.paragraph}>Você será inserido em suas opções
          conforme a necessidade de cada ministério. Ao lado de cada ministério
					encontram-se alguns <strong>números que são os pré-requisitos
					para ministério.</strong>
          </p>
        </Box>

        <Box className={classes.requirementsSection}>
          <Typography className={classes.attentionSectionTitle}>
            Pré-Requisitos
					</Typography>
          <p className={classes.attentionSectionsubTitle}>
            Lembrando que os ministérios possuem pré-requisitos, então leia
            com bastante atenção, para não se candidatar a um ministéio que
            você não atende e assim se frustar!
						</p>
        </Box>

        <Box style={{ margin: '0 8%', }}>
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

          {ministriesQuery.map(ministry => {
            return (
              <Card
                key={ministry.id}
                title={ministry.data.title[0].text}
                requirements={ministry.data.requirements}
                image={ministry.data.image.url}
                form={ministry.data.form.url}
              />
            )
          })
          }

        </Box>
      </Grid>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {

  const response = await client().query("");

  const ministries = response.results;

  return {
    props: {
      ministries
    }
  }

};

export default Home;

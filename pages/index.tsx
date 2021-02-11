import { useState } from 'react'
import {
	Grid,
	Box,
	Typography,
	TextField
} from '@material-ui/core';
import { FiSearch } from 'react-icons/fi';
import { useStyles } from '../styles/index';
import { Card } from '../components/Card/Card';

const Home: React.FC = () => {
	const classes = useStyles();

	const [text, setText] = useState('');

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
					<Box className={classes.container}>
						<Typography className={classes.attentionSectionTitle} style={{ marginBottom: 23 }}>
							Legenda de Pré-Requisitos
						</Typography>
						<p className={classes.paragraphWhite}>
							1.  Ter concluído “Um Com Deus”; estar cursando; ou se compromete
							em se inscrever na próxima turma.
						</p>
						<p className={classes.paragraphWhite}>2.  Ser batizado.</p>
						<p className={classes.paragraphWhite}>
							3.  Frequentar regularmente Grupo de Amigos e SENIB.
						</p>
						<p className={classes.paragraphWhite}>
							4.  Frequentar os cultos com regularidade.
						</p>
						<p className={classes.paragraphWhite}>
							5.  Amar as crianças, adolescentes ou jovens.
						</p>
						<p className={classes.paragraphWhite}>
							6.  Ter pelo menos um ano de igreja.
						</p>
						<p className={classes.paragraphWhite}>7.  Caso esteja em união conjugal,
						necessita ser casado legalmente e não união estável ou amigado.
						</p>
					</Box>
				</Box>

				<Box style={{ margin: '0 8%', }}>
					<Box className={classes.inputContainer}>
						<Box display="flex" alignItems="center">
							<TextField
								className={classes.searchInput}
								InputProps={{ className: classes.input, disableUnderline: true }}
								placeholder="Pesquisar Ministério..."
								value={text}
								onChange={(e) => setText(e.target.value)}
							/>
							<Box className={classes.searchIconContainer}>
								<FiSearch size="21" color="#FFFCF5" />
							</Box>
						</Box>
					</Box>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</Box>
			</Grid>
		</Box>
	);
};

export default Home;

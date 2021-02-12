import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	title: string;
	requirements: string[]
}

export default (req: NextApiRequest, res: NextApiResponse<Data[]>) => {

	const ministerios = [
		{
			title: 'Acroarte',
			requirements: ['Um com Deus (iniciando)', 'G.A']
		},
		{
			title: 'Anfitriões NJ',
			requirements: ['6 meses de NIB', 'Aprovação Pastoral Posterior']
		},
		{
			title: 'Apoio Técnico',
			requirements: ['Estar fazendo Um com Deus', 'Gostar de Aprender e Servir']
		},
		{
			title: 'Arte e Vida',
			requirements: ['1 Ano de NIB', 'Disponibilidade sábado pela manhã', 'Um com Deus', 'GA', 'Maior de 18 Anos']
		},
		{
			title: 'Clubinhos',
			requirements: ['1 Ano de NIB', 'Participar do treinamento', 'Disponibilidade aos sábados (Informe-se)']
		},
		{
			title: 'Ballet',
			requirements: ['Sonho de Natal', 'Somente Meninas', 'Experiência com dança (mínimo 1 ano)']
		},
		{
			title: 'Dança 1',
			requirements: ['Sonho de Natal']
		},
		{
			title: 'Dança 2',
			requirements: ['Sonho de Natal']
		},
		{
			title: 'Fantoches',
			requirements: ['4 meses na NIB']
		},
		{
			title: 'Integração',
			requirements: ['6 meses na NIB']
		},
		{
			title: 'Internet',
			requirements:
				[
					'1 Ano de NIB',
					'Ter feito UCD/Estar participando de GA',
					'Estar frequentando o Senib',
					'Conhecimentos: Desenvolver Mobile (Android e IOS)',
					'Edição de vídeo/edição de imagem',
					'Elaborar postagens em instagram e facebook',
					'Gostar de Ler / Facilidade com interpretação de textos',
					'Possuir PC ou notebook e ter acesso a internet'
				]
		},
		{
			title: 'Mídia Jovem',
			requirements:
				[
					'1 ano de NIB',
					'Computador e acesso a internet',
					'Edição de imagem: Photoshop ou Illustrator',
					'Edição de vídeo: Premiere',
					'Redator: Boa escrita e criatividade',
					'Ministério Principal'
				]
		},
		{
			title: 'Logística',
			requirements:
				[
					'Disponibilidade 15min. após o culto de jovens e aos domingos a combinar',
					'Amor e Força'
				]
		},
		{
			title: 'Meditação',
			requirements:
				[
					'2 anos de NIB',
					'Acesso a internet e computador',
					'Boa escrita/redação',
					'Cumprir prazos',
					'Noções de formatação',
					'Aprovação no teste'
				]
		},
		{
			title: 'Música',
			requirements: ['6 meses de NIB']
		},
		{
			title: 'Amor em Ação',
			requirements:
				[
					'Um com Deus',
					'6 meses de NIB',
					'Disponibilidade para visitas'
				]
		},
		{
			title: 'Orquestra',
			requirements: ['Um com Deus/Batismo', 'GA', 'Ter ou conseguir um instrumento']
		},
		{
			title: 'Pantomima',
			requirements: ['Frequentando a partir do Sonho de Natal']
		},
		{
			title: 'Palco Artístico',
			requirements: ['Frequentando a partir do Sonho de Natal']
		},
		{
			title: 'Patinarte',
			requirements:
				[
					'Estar cursando ou ter começado o Um com Deus',
					'Ter condições de comprar um patins',
					'Ter tempo integral a partir do Sonho de Natal',
					'Não precisa saber andar de patins'
				]
		},
		{
			title: 'Percussão',
			requirements:
				[
					'Frequentando a partir do Sonho de Natal',
					'Disponibilidade para pelo menos um ensaio durante a semana'
				]
		},
		{
			title: 'Recepção Artística',
			requirements:
				[
					'A partir do Sonho de Natal',
					'Disponibilidade aos sábados a tarde e pelo menos uma noite na semana',
					'Criatividade, aptidão com alguma arte, tecnologia, engenharia, etc.'
				]
		},
		{
			title: 'Roteiro',
			requirements:
				[
					'Um com Deus',
					'1 ano de NIB',
					' Gostar de escrever',
					'Cumprir prazos',
					'Ter acesso a e-mail'
				]
		},
		{
			title: 'Secretáriado Senib',
			requirements: ['6 meses de NIB', 'Assistir um Senib e trabalhar em outro']
		},
		{
			title: 'Som',
			requirements: ['1 ano de Igreja', 'Um pouco de conhecimento musical']
		},
		{
			title: 'Strike',
			requirements:
				[
					'1 ano de NIB',
					'Disponibilidade de tempo durante a semana (manhã ou tarde ou noite) e sábado à tarde',
					'Maiores de 18 anos'
				]
		},
		{
			title: 'Teatro',
			requirements: ['3 meses de NIB']
		},
		{
			title: 'Tecnologia',
			requirements: ['1 ano na NIB', 'Criatividade e curiosidade']
		},
		{
			title: 'Tia por um dia',
			requirements:
				[
					'Jovens e adultas',
					'Amor por criança',
					'Tempo voluntário durante sábado a tarde',
					'Chegar cedo'
				]
		},
		{
			title: 'Missões Urbanas',
			requirements:
				[
					'2 anos de NIB',
					'Um com Deus/Batismo',
					'GA',
					'Participação ativa no Senib',
					'Idade: a partir de 18 anos'
				]
		},
		{
			title: 'Senib Criativo',
			requirements:
				[
					'Um com Deus/Senib/Culto',
					'Um ano de NIB',
					'Participar de todos os treinamentos',
					'Ministério Principal'
				]
		},
		{
			title: 'News e Nova TV',
			requirements: ['Câmera: "1 ano de NIB, Por Escala" ']
		},
		{
			title: 'Orfanato',
			requirements:
				[
					'Músicos/Vocal',
					'Iniciando Um com Deus',
					'GA',
					'Disponibilidade uma segunda e um sábado por mês'
				]
		},
		{
			title: 'Nova Família',
			requirements:
				[
					'1 ano de NIB',
					'Um com Deus',
					'GA',
					'Obs: Não é um ministério principal'
				]
		},
		{
			title: 'Nova Chance',
			requirements:
				[
					'1 ano de Igreja',
					'Disponibilidade na quinta as 16hrs',
					'Participar ativamente de um GA',
					'Um com Deus',
					'Obs: Não é ministério principal'
				]
		},
	]

	res.status(200).json(ministerios);
}
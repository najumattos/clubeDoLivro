const membrosClube = [
    {
      id: 1,
      foto: '',
      nome: 'Naju',
      redeSocial: '@najuliarmattos',
      linkRedeSocial: 'https://www.instagram.com/najuliarmattos/',
      recomendacao: 'Desventuras em Série',
      descricao: 'Sou leitora desde "Os Três Porquinhos", ainda no primário, e passei por Monteiro Lobato durante o ensino fundamental. Em 2017, vivi uma ressaca literária que durou quase dois anos, até ser resgatada por Death Note e Harry Potter. Muitas vezes, um livro foi minha companhia: me tirou da solidão, me transportou para outros lugares, apresentou novas culturas e seres completamente diferentes — tudo isso sem que eu precisasse sair do lugar. Com o Clube, compartilhamos momentos preciosos: conversas, debates, amizades e experiências maravilhosas. Para mim, não importa seu gênero literário favorito, quantos livros você já leu ou há quanto tempo você cultiva o hábito da leitura. O que realmente importa é guardar o melhor de cada página lida.'
    },
    {
      id: 2,
      foto: '',
      nome: 'Tainara Santos',
      redeSocial: '@tainara_santos2001',
      linkRedeSocial: 'https://www.instagram.com/tainara_santos2001/',
      recomendacao: 'Livro recomendado: “As vantagens de ser invisível”',
      descricao: 'Apaixonada por histórias que trazem reflexões sobre a juventude, emoções intensas e o autoconhecimento.'
    },
    {
      id: 3,
      foto: '',
      nome: 'Tais Marculino',
      redeSocial: '@tais_marculino',
      linkRedeSocial: 'https://www.instagram.com/tais_marculino/',
      recomendacao: 'Livro recomendado: O amor não é óbvio - <i>Elayne Baeta</i>',
      descricao: 'Eu gosto de ler livros, e a grande maioria deles fala sobre o amor de uma mulher por outra. Quando eu era mais nova, não gostava muito de ler romances, mas mais tarde descobri o motivo: eu não me identificava com esses romances. No entanto, não leio somente romances sáficos. Também gosto de livros de ficção científica, fantasia, terror e aventura. Os livros que leio, na grande maioria, às vezes me tiram da realidade. Eu gosto disso, pois consigo viajar para vários lugares, tempos e espaços sem sair de casa. Isso é fascinante!'
    }
  ];

  const container = document.getElementById('containerMembros');
  const template = document.getElementById('membro');

  membrosClube.forEach(membro => {
    const membroClone = template.cloneNode(true);
    membroClone.style.display = 'flex';

    membroClone.querySelector('.nomeMembro').textContent = membro.nome;
    const link = membroClone.querySelector('.redeSocialMembro a');
    link.href = membro.linkRedeSocial;
    link.textContent = membro.redeSocial;
    membroClone.querySelector('.recomendacaoMembro').innerHTML = membro.recomendacao;
    membroClone.querySelector('.descricaoMembro').textContent = membro.descricao;

    container.appendChild(membroClone);
  });
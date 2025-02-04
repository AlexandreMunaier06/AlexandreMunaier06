import html from "../assets/images/html.png";
import css from "../assets/images/css-3.png";
import js from "../assets/images/js.png";
import basico from "../assets/images/basicoBemFeito.png";

const projectsData = [
  {
    id: 1,
    title: "Básico Bem Feito",
    subTitle: "Academia",
    tipo: "Projeto acadêmico",
    image: basico,
    stacks: [html, css, js],
    description: "Site de montagem e gerenciamento de ficha de academia.",
    details: `Site desenvolvido como parte de um projeto acadêmico, voltado para a área fitness. 
    A plataforma permite que os usuários gerenciem suas fichas de treino de forma prática e organizada. 
    O projeto foi construído utilizando HTML, CSS e JavaScript.`,
    siteLink: "",
    repoLink: "https://github.com/AlexandreMunaier06/BasicoBemFeito"
  },
  // {
  //   id: 2,
  //   title: "Projeto 2",
  //   tipo: "Faculdade",
  //   qntPessoas: 1,
  //   image: Tobi,
  //   description: "Descrição breve do Projeto 2.",
  //   details: "Informações detalhadas sobre o Projeto 2, incluindo funcionalidades principais, design e melhorias futuras.",
  //   siteLink: "https://exemplo.com/projeto2",
  //   repoLink: "https://github.com/usuario/projeto2"
  // },
  // {
  //   id: 3,
  //   title: "Projeto 3",
  //   tipo: "Faculdade",
  //   qntPessoas: 1,
  //   image: Tobi,
  //   description: "Descrição breve do Projeto 3.",
  //   details: "Informações detalhadas sobre o Projeto 3, com foco no processo de desenvolvimento, integrações e feedback recebido.",
  //   siteLink: "https://exemplo.com/projeto3",
  //   repoLink: "https://github.com/usuario/projeto3"
  // },
  // {
  //   id: 4,
  //   title: "Projeto 4",
  //   tipo: "Faculdade",
  //   qntPessoas: 1,
  //   image: Tobi,
  //   description: "Descrição breve do Projeto 4.",
  //   details: "Informações detalhadas sobre o Projeto 4, destacando os objetivos alcançados, desempenho e escalabilidade.",
  //   siteLink: "https://exemplo.com/projeto4",
  //   repoLink: "https://github.com/usuario/projeto4"
  // }
];

export default projectsData;

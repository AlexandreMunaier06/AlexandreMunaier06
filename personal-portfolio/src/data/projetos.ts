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
];

export default projectsData;

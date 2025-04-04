import html from "../assets/images/html.png";
import css from "../assets/images/css-3.png";
import js from "../assets/images/js.png";
import py from "../assets/images/python.png";
import basico from "../assets/images/basicoBemFeito.png";
import ytDownloader from "../assets/images/youtubeDownloader.png";

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
  {
    id: 2,
    title: "YouTube Downloader",
    subTitle: "Download de vídeos do YouTube",
    tipo: "Projeto pessoal",
    image: ytDownloader,
    stacks: [py],
    description: "Interface desktop que permite baixar qualquer vídeo do youtube.",
    details: `Site desenvolvido para aprendizado pessoal. A interface permite que os usuários baixem vídeos do YouTube de forma simples e rápida.
    O projeto foi construído utilizando Python, a biblioteca Tkinter e a biblioteca pytubefix.`,
    siteLink: "",
    repoLink: "https://github.com/AlexandreMunaier06/python"
  },
];

export default projectsData;

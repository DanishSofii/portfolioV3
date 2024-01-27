import Card from "./Card";
import img1 from "../images/im1.webp";
import img2 from "../images/im2.webp";
import img3 from "../images/im3.webp";
import img4 from "../images/img4.webp";
import img5 from "../images/img5.webp";
import img6 from "../images/img6.webp";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

function Projects() {
  const cardDataArray = [
    {
      id: 1,
      imageSrc: img1,
      title: "Library Management System",
      description: "LMS (FullStack) built from scratch using EJS, CSS, Express JS , MySql to manage the books in library online.",
      links: [
        { text: 'GitHub', url: 'https://github.com/DanishSofii/DBMS-Project', icon: faGithub },
        { text: 'Visit', url: 'https://example.com/link-b',icon: faArrowAltCircleRight }
      ]
    },
    {
      id: 2,
      imageSrc: img6,
      title: "Nebula",
      description: "Blogging website (FullStack) created using React js, Express js, MySql, Tailwind CSS.",
      links: [
        { text: 'GitHub', url: 'https://github.com/DanishSofii/Blog-Website', icon: faGithub },
        { text: 'Visit', url: 'https://blog-website-lemon-zeta.vercel.app/',icon: faArrowAltCircleRight }
      ]
    },
    {   
      id: 3,
      imageSrc: img2,
      title: "Eat n Split",
      description: " Friends can split easily; Created using React JS  ",
      links: [
        { text: 'GitHub', url: 'https://github.com/DanishSofii/pizza-menu', icon: faGithub },
        { text: 'Visit', url: 'https://eatsplit-dun.vercel.app/',icon: faArrowAltCircleRight }
      ]
    },
    {
      id: 4,
      imageSrc: img3,
      title: "Weather APP",
      description: "Weather monitoring app using EJS css and JS.",
      links: [
        { text: 'GitHub', url: 'https://github.com/DanishSofii/Weather-App', icon: faGithub },
        { text: 'Visit', url: 'https://example.com/link-b',icon: faArrowAltCircleRight }
      ]
    },
    {
      id: 5,
      imageSrc: img4,
      title: "TO-DO List Master",
      description: "App for managing daily tasks easily with HTML CSS and JS.",
      links: [
        { text: 'GitHub', url: 'https://github.com/DanishSofii/To-Do-List', icon: faGithub },
        { text: 'Visit', url: 'https://main--tangerine-custard-d73e19.netlify.app/',icon: faArrowAltCircleRight }
      ]
    },
    {
      id: 6,
      imageSrc: img5,
      title: "Calculator",
      description: "A basic Calculator using HTML, CSS and JS",
      links: [
        { text: 'GitHub', url: 'https://github.com/DanishSofii/Calculator', icon: faGithub },
        { text: 'Visit', url: 'https://example.com/link-b',icon: faArrowAltCircleRight }
      ]
    },
    // Add more card data as needed
  ];
  return (
    <div id="projects" className=" bg-indigo-950 h-screen p-5 flex justify-center items-center flex-col">
      <div>
        <h1 className="text-5xl font-bold text-slate-100 text-center mb-8">
          Projects
        </h1>
      </div>
      <div className="flex justify-center w-5/6 bg-blue-200 h-5/6 p-9 rounded-lg">
        <div className="flex justify-center items-center h-full flex-wrap w-full overflow-y-auto file:">
          {cardDataArray.map((cardData) => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

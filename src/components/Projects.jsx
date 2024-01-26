import Card from "./Card";
import img1 from "../images/im1.png";
import img2 from "../images/im2.png";
import img3 from "../images/im3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

function Projects() {
  const cardDataArray = [
    {
      id: 1,
      imageSrc: img1,
      title: "Library Management System",
      description: "LMS built from scratch using EJS, CSS, Express JS , MySql to manage the books in library online.",
      links: [
        { text: 'GitHub', url: 'https://github.com/DanishSofii/DBMS-Project', icon: faGithub },
        { text: 'Visit', url: 'https://example.com/link-b',icon: faArrowAltCircleRight }
      ]
    },
    {   
      id: 2,
      imageSrc: img2,
      title: "Card 2 Title",
      description: "This is the description for Card 2.",
      links: [
        { text: 'GitHub', url: 'https://github.com/DanishSofii/DBMS-Project', icon: faGithub },
        { text: 'Visit', url: 'https://example.com/link-b',icon: faArrowAltCircleRight }
      ]
    },
    {
      id: 3,
      imageSrc: img3,
      title: "Card 2 Title",
      description: "This is the description for Card 2.",
      links: [
        { text: 'GitHub', url: 'https://github.com/DanishSofii/DBMS-Project', icon: faGithub },
        { text: 'Visit', url: 'https://example.com/link-b',icon: faArrowAltCircleRight }
      ]
    },
    {
      id: 4,
      imageSrc: img4,
      title: "Card 2 Title",
      description: "This is the description for Card 2.",
      links: [
        { text: 'GitHub', url: 'https://github.com/DanishSofii/DBMS-Project', icon: faGithub },
        { text: 'Visit', url: 'https://example.com/link-b',icon: faArrowAltCircleRight }
      ]
    },
    {
      id: 5,
      imageSrc: img5,
      title: "Card 2 Title",
      description: "This is the description for Card 2.",
      links: [
        { text: 'GitHub', url: 'https://github.com/DanishSofii/DBMS-Project', icon: faGithub },
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

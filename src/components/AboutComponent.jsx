import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import bgimg from "../images/aboutbg.jpg";
import dpimg from "../images/dp.png"
import Menu from "./Menu";
function AboutComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const downloadResume =() =>{
    const resumeFilePath = "https://drive.google.com/file/d/1Ctr7daTh09lQ9CNfjQfkWggjUZ-q1z1a/view?usp=drive_link";
    window.open(resumeFilePath, '_blank'); 
  }

  return (
    <div
    id="about"
      className=" bg-cover bg-center h-[50vh] md:h-screen"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div>
        <div className=" fixed top-0">
          <button className="text-white" onClick={toggleMenu}>
          <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
          </button>
        </div>
        <div className="flex justify-center md:justify-around items-center p-5 pt-20 ">
            <div>
            <h1 className=" text-slate-50 sm:text-8xl "><span className=" text-green-500 font-bold">Danish Bashir
              </span></h1>
              <h2 className=" font-bold font-lg text-slate-300 mb-12">
                I am a <span className="text-orange-500">
                <TypeAnimation
                sequence={["Web Developer", 1000, "", 1000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
                </span>
              </h2>
              <button className=" bg-green-400 h-6 w-[5rem] text-sm sm:text-lg sm:h-8 rounded-sm outline-none border-none " onClick={downloadResume}>Resume</button>
            </div>
            <div>
                <img className="imgbrd h-[20rem] w-[20rem] rounded-[50%] bg-purple-400 bg-opacity-40 hidden md:block lg:block"  src={dpimg} alt="" />
            </div>
        </div>

      </div>
    </div>
  );
}

export default AboutComponent;

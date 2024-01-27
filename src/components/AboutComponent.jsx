import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import bgimg from "../images/aboutbg.webp";
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
      className=" bg-cover bg-center h-[35vh] md:h-[85vh]"
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
            <h1 className=" text-slate-50 text-3xl sm:text-5xl md:text-6xl "><span className=" text-green-500 font-bold">Danish Bashir
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
              <button className=" bg-green-400 h-5 w-[4rem] text-[10px] sm:text-[12px] sm:h-6 rounded-sm outline-none border-none " onClick={downloadResume}>Resume</button>
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

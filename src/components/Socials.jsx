import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin , faXTwitter,faGithub } from '@fortawesome/free-brands-svg-icons';

const Socials = () => {
  return (
    <div>
      <div id='socials' className="socailsContainer w-full flex flex-col justify-center h-[7rem] items-center bg-slate-300">
        <h2 className=' text-2xl mb-2 font-bold'>SOCIALS</h2>
        <ul className='w-3/6 flex justify-around'>
            <li className=' text-3xl cursor-pointer hover:text-orange-400 '><a href="https://www.instagram.com/danish.bashir_/" target='_blank'><FontAwesomeIcon icon={faInstagram}/></a></li>
            <li className=' text-3xl cursor-pointer hover:text-orange-400 '><a href="https://in.linkedin.com/in/danish-sofi-184318234?trk=public_profile_browsemap" target='_blank'><FontAwesomeIcon icon={faLinkedin}/></a></li>
            <li className=' text-3xl cursor-pointer hover:text-orange-400 '><a href="https://github.com/DanishSofii" target='_blank'><FontAwesomeIcon icon={faGithub}/></a></li>
            <li className=' text-3xl cursor-pointer hover:text-orange-400 '><a href="https://twitter.com/DanishBashir_?t=pKWFeJooAqUr6efxCp0-Iw&s=08" target='_blank'><FontAwesomeIcon icon={faXTwitter}/></a></li>
        </ul>
      </div>
    </div>
  );
}

export default Socials;

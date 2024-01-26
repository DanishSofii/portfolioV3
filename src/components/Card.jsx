// Card.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Card({ imageSrc, title, description, links }) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden hover:shadow-lg  mb-10 max-w-[340px] min-h-[360px]">
      <img className="w-full h-48 object-cover overflow-hidden hover:scale-125 transition-all " src={imageSrc} alt={title} />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 truncate">{description}</p>
        <div className="mt-4 flex space-x-2">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target='_blank'
              className="  text-white  flex justify-center items-center text-slate-900 text-lg hover:text-orange-400 "
            >
                <FontAwesomeIcon icon={link.icon} className="mr-2" />
              {/* {link.text} */}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;

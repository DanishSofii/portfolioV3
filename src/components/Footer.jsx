import React from 'react';

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-slate-900 h-[4rem]">
      <h2
        className="text-slate-50 font-thin font-mono"
        style={{ fontFamily: "'Atomic Age', system-ui", fontWeight: 400, fontStyle: 'normal', color: 'orange', fontSize: '30px'}}
      >
        Danish Bashir
      </h2>
      {/* <img className='h-20 bg-transparent' src={logo} alt="logo" /> */}
    </div>
  );
};

export default Footer;

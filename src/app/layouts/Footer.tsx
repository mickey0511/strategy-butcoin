import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black w-full flex flex-col lg:flex-row  p-4 border-t-2 border-gray-400">
      <div className="container flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center text-white ">
        <div className="w-[200px] md:flex lg:justify-center md:items-center">
          <img src="/StrategyB.png" alt="logo" className="w-auto h-auto" />
        </div>
        <p className='opacity-50 text-xl'>© 2025 Strategy. All Rights Reserved.</p>
      </div>

      <div className="w-full text-lg flex flex-col sm:flex-row justify-center gap-4 items-center ">

        <a href="#" className="opacity-50 text-white bg-inherit hover:opacity-100 hover:underline">
          Contact Us
        </a>
        <a href="#" className="opacity-50 text-white bg-inherit hover:opacity-100 hover:underline">
          Media Kit
        </a>
        <a href="#" className="opacity-50 text-white bg-inherit hover:opacity-100 hover:underline">
          Legal
        </a>
        <a href="#" className="opacity-50 text-white bg-inherit hover:opacity-100 hover:underline">
          Terms of use
        </a>

        <a href="#" className="opacity-50 text-white bg-inherit hover:opacity-100 hover:underline">
          Privacy policy
        </a>

      </div>
    </footer>
  );
};

export default Footer;

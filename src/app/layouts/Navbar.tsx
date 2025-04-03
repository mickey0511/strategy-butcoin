import { BsList } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi2";

const Navbar: React.FC = () => {
  return (
    <div className="w-full h-20 bg-[#FA660F] flex flex-row justify-between items-center p-4 border-b-2 fixed top-0 left-0 z-10">
      <div className=" md:flex md:justify-center md:items-center">
        <div className="w-[200px] lg:w-[250px]">
          <img src="/StrategyB.png" alt="logo" className="w-auto h-auto" />
        </div>
      </div>

      {/* <div className="hidden w-full lg:text-lg md:flex justify-end gap-4 items-center">

        <a href="#" className="text-black bg-inherit hover:text-white hover:underline">
          Network
        </a>
        <a href="#" className="text-black bg-inherit hover:text-white hover:underline">
          About
        </a>
        <a href="#" className="text-black bg-inherit hover:text-white hover:underline">
          Merch
        </a>
        <a href="#" className="text-black bg-inherit hover:text-white hover:underline">
          Software
        </a>

      </div> */}
{/* 
      <div className="flex justify-between items-center gap-4">
        <div className="md:min-w-[200px] flex flex-row md:justify-center md:items-center">
          <button className="text-black text-3xl px-2 py-1 bg-inherit rounded-md focus:outline-none hover:cursor-pointer">
            <HiOutlineUser className="w-full h-auto" />

          </button>
          <div className="flex justify-center items-center text-3xl hover:cursor-pointer md:hidden">
            <BsList />
          </div>
        </div>


      </div> */}
    </div>
  );
};

export default Navbar;

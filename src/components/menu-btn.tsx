import { Dispatch } from "react";

type props = {
  isNavbarOpen: boolean;
  setIsNavbarOpen: Dispatch<React.SetStateAction<boolean>>;
}
export const MenuBtn = ({ isNavbarOpen, setIsNavbarOpen }: props) => {

  return (
    <button className={`flex flex-col justify-center items-center gap-1.5 z-10 w-10 h-10
      bg-(--blue4) rounded-md md:hidden cursor-pointer`}
      onClick={() => setIsNavbarOpen(prev => !prev)}
    >
      <span className={`block w-6 h-0.5 bg-white transition-all duration-500
        ${isNavbarOpen ? "translate-y-1.5 rotate-130" : ""}`}
      />
      <span className={`block w-6 h-0.5 bg-white transition-all duration-500
        ${isNavbarOpen ? "opacity-0" : ""}`}
      />
      <span className={`block w-6 h-0.5 bg-white transition-all duration-500
        ${isNavbarOpen ? "-translate-y-2 -rotate-130" : ""}`}
      />
    </button>
  )
}
import gsap from "gsap";
import Image from "next/image";
import logo from "../../public/port-logo.svg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import NavMenu from "./NavMenu";
import MenuButton from "./MenuButton";

export default function Navbar() {
  return (
    <header className="fixed w-full py-[54.11px] px-[30px] lg:px-[100px]">
      <nav className="flex justify-between items-center h-[81.03px]">
        <div className="w-1/3">
          <Image src={logo} alt="Logo" className="cursor-pointer" />
        </div>
        <div className="w-1/3 hidden lg:block">
          <NavMenu />
        </div>
        <div className="flex justify-center items-center opacity-60 hover:opacity-100 lg:hidden">
          <MenuButton />
        </div>
        <div className="hidden md:flex justify-end gap-[40px] w-1/3">
          <FaGithub
            size={45}
            className="text-yellow hover:rotate-12 transition-all duration-300 ease-in-out hover:scale-110"
          />
          <FaLinkedinIn
            size={45}
            className="text-yellow hover:rotate-12 transition-all duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </nav>
    </header>
  );
}

"use client";
import Link from "next/link";
import { navLinks } from "../constants/constants";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import { useRef } from "react";
import {
  animateLinksOpacity,
  animateMenu,
  animateMenuBg,
  animateNavScale,
  animateNavWidth,
} from "@/animations/animations";
import { FaBars } from "react-icons/fa";

export default function NavMenu() {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const linkRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tl = gsap.timeline();

  useEffect(() => {
    animateLinksOpacity(linkRefs, navRef);
    animateNavWidth(navRef);
    animateNavScale(navRef);
    animateMenu(menuRef, navRef);
    animateMenuBg(menuRef, navRef);
  }, []);

  return (
    <div className="relative">
      <div
        ref={navRef}
        className="hidden lg:flex justify-center items-center relative h-[60px] rounded-full bg-yellow bg-opacity-10 backdrop-blur-sm"
      >
        {navLinks.map((link, index) => (
          <div
            key={link.id}
            ref={(el) => {
              linkRefs.current[index] = el;
            }}
            className="flex justify-center items-center hover:bg-yellow h-full w-full rounded-full hover:opacity-100 transition-all duration-300 ease-in-out overflow-hidden"
          >
            <Link href={link.url}>{link.name}</Link>
          </div>
        ))}
      </div>
      <div
        ref={menuRef}
        className="absolute top-20 left-0 right-0 mx-auto flex justify-center items-center bg-yellow bg-opacity-10 backdrop-blur-sm cursor-pointer h-[60px] scale-0 rounded-full w-[60px]"
      >
        <FaBars className="text-black" size={25} />
      </div>
    </div>
  );
}

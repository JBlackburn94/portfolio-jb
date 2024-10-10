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
  animateNavScale,
  animateNavWidth,
} from "@/animations/animations";

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
  }, []);

  return (
    <div className="relative">
      <div
        ref={navRef}
        className="hidden lg:flex justify-center items-center relative h-[60px] rounded-full bg-yellow bg-opacity-60 backdrop-blur-md"
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
        className="absolute top-20 left-0 right-0 mx-auto flex justify-center items-center bg-yellow opacity-60 hover:opacity-100 cursor-pointer h-[60px] scale-0 rounded-full w-[60px]"
      >
        <p>Menu</p>
      </div>
    </div>
  );
}

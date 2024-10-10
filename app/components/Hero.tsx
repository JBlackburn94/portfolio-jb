"use client";
import React from "react";
import Image from "next/image";
import exclam from "../../public/exclamation.svg";
import { useRef, useEffect } from "react";
import { animateHeader } from "@/animations/animations";

export default function Hero() {
  const header = useRef<HTMLHeadingElement>(null);
  const headerTwo = useRef<HTMLHeadingElement>(null);
  const heroIcon = useRef<HTMLImageElement>(null);
  const heroSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animateHeader(header, headerTwo, heroIcon, heroSection);
  });

  return (
    <section className="h-screen bg-green bg-one pt-[80px] md:pt-[150px] px-[35px] md:px-[100px] pb-[50px]">
      <div className="h-full w-full flex flex-col justify-center items-center gap-10">
        <div className="flex justify-center items-center text-center relative gap-1 leading-[80px] md:leading-[110px]">
          <h1
            ref={header}
            className="text-[5rem] md:text-[7rem] opacity-0 font-bold z-10"
          >
            Hello, <br /> I&apos;m Jason <br /> Blackburn
          </h1>
          <p
            ref={headerTwo}
            className="text-[5rem] md:text-[7rem] opacity-0 font-bold text-white absolute top-0 left-0 z-0"
          >
            Hello, <br /> I&apos;m Jason <br /> Blackburn
          </p>
        </div>
        <h2 className="text-[2rem] font-bold">Frontend Developer</h2>
      </div>
    </section>
  );
}

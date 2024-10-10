// animations/navAnimations.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateLinksOpacity = (
  linkRefs: React.MutableRefObject<(HTMLDivElement | null)[]>,
  navRef: React.RefObject<HTMLDivElement>
) => {
  linkRefs.current.forEach((linkRef) => {
    if (linkRef) {
      gsap.to(linkRef, {
        scrollTrigger: {
          trigger: navRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          toggleActions: "play none none reverse",
        },
        opacity: 0,
      });
    }
  });
};

export const animateNavWidth = (navRef: React.RefObject<HTMLDivElement>) => {
  gsap.to(navRef.current, {
    scrollTrigger: {
      trigger: navRef.current,
      start: "200% top",
      end: "600% top",
      scrub: true,
      toggleActions: "play none none reverse",
    },
    width: "60px",
    left: "41.5%",
    right: "58.5%",
  });
};

export const animateNavScale = (navRef: React.RefObject<HTMLDivElement>) => {
  gsap.to(navRef.current, {
    scrollTrigger: {
      trigger: navRef.current,
      start: "600% top",
      end: "1000% top",
      scrub: true,
      toggleActions: "play none none reverse",
    },
    scale: 0,
  });
};

export const animateMenu = (
  menuRef: React.RefObject<HTMLDivElement>,
  navRef: React.RefObject<HTMLDivElement>
) => {
  gsap.to(menuRef.current, {
    scrollTrigger: {
      trigger: navRef.current,
      start: "1000% top",
      end: "1400% top",
      scrub: true,
      toggleActions: "play none none reverse",
    },
    scale: 1,
    top: 0,
  });
};

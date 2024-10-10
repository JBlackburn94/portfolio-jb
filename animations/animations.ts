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
      end: "500% top",
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
      start: "500% top",
      end: "700% top",
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
      start: "700% top",
      end: "1000% top",
      scrub: true,
      toggleActions: "play none none reverse",
    },
    scale: 1,
    top: 0,
  });
};

export const animateMenuBg = (
  menuRef: React.RefObject<HTMLDivElement>,
  navRef: React.RefObject<HTMLDivElement>
) => {
  gsap.to(menuRef.current, {
    scrollTrigger: {
      trigger: navRef.current,
      start: "900% top",
      end: "1000% top",
      scrub: true,
      toggleActions: "play none none reverse",
    },
    backgroundColor: "#cccccc",
  });
};

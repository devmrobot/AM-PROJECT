import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import { globalRefsContext } from "../context/GlobalRefs";
import { scrollContext } from "../context/ScrollContext";

export default function ScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const Globalrefs = useContext(globalRefsContext);
  const ScrollContext = useContext(scrollContext);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    smoother.current = ScrollSmoother.create({
      wrapper: scrollwrapper.current,
      content: scrollcontent.current,
      smooth: 1,
      effects: true,
      normalizeScroll: true,
    });

    return () => smoother.current.kill();
  }, []);

  if (!Globalrefs) return null;
  const { scrollwrapper, scrollcontent } = Globalrefs;

  if (!ScrollContext) return null;
  const { smoother } = ScrollContext;

  return (
    <div
      id="smooth-wrapper"
      ref={scrollwrapper as React.MutableRefObject<HTMLDivElement>}
      className="absolute"
    >
      <div
        id="smooth-content"
        ref={scrollcontent as React.MutableRefObject<HTMLDivElement>}
      >
        {children}
      </div>
    </div>
  );
}

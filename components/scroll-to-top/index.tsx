"use client"

import useEventListener from "@/hooks/useEventListener";
import { CSSProperties, useState } from "react";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const isReducedMotion = 
    typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  const callback = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  useEventListener('scroll', callback);

  const goToTop = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: isReducedMotion ? 'auto' : 'smooth'
    });
  }

  const style: CSSProperties = {
    display: isVisible ? 'block' : 'none',
  };
  return (
    <button
      className="fixed bottom-6  right-6 text-3xl z-10 cursor-pointer text-teal-400  rounded-full px-0 border-none bg-white dark:bg-black/80"
      style={style}
      onClick={goToTop}
    >
      Top
    </button>
  )
}

export default ScrollToTop
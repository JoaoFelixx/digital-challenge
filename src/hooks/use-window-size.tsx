import {
  useState,
  useEffect,
} from "react";


interface Size {
  width: number;
  height: number;
  isMobile: boolean
}


export const useWindowSize = (): Size => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: 0,
    height: 0,
    isMobile: false,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth <= 768
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
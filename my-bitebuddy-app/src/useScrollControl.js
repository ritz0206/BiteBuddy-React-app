import { useState, useEffect } from "react";

const useScrollControl = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up or at top and within 5% of viewport height
      if (currentScrollY < lastScrollY || currentScrollY < window.innerHeight * 0.05) {
         
        setShowHeader(true);
      } 
      // Hide header when scrolling down (after 10% of viewport height from top ~100px for desktop )
      else if (currentScrollY > window.innerHeight * 0.1 && currentScrollY > lastScrollY) {
        setShowHeader(false);
      }

    setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return showHeader;
};

export default useScrollControl;
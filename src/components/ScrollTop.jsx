import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Get the current path

  useEffect(() => {
    window.scrollTo({
      top: 0,       // Scroll to the top of the page
      behavior: "smooth", // Enable smooth scrolling
    });
  }, [pathname]); // Trigger whenever the route changes

  return null;
};

export default ScrollToTop;
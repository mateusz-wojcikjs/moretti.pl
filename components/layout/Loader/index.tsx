import { useEffect, useState } from "react";
import { StyledLoader } from "./Loader.styled";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const onPageLoad = () => {
      setIsLoading(false);
    };
    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <StyledLoader>
      <div id="loader">
        <div className="loader-dot" />
        <div className="loader-dot" />
        <div className="loader-dot" />
        <div className="loader-dot" />
        <div className="loader-dot" />
      </div>
    </StyledLoader>
  );
};
export default Loader;

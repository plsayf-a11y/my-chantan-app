import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <div className="not-found-copy"><span className="eyebrow">FRUNZĂ ATELIER · A SMALL DETOUR</span>
        <h1>Looks like you've wandered somewhere unexpected.</h1>
        <a href="/" className="button button-dark">Return to the Atelier</a></div>
      </div>
    </div>
  );
};

export default NotFound;

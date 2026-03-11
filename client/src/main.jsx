<<<<<<< HEAD
import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LogoLoader from "./components/common/LogoLoader";

function Boot() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader ? <LogoLoader /> : null}
      <App />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Boot />
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
>>>>>>> ab1631779d8b4110d9de3f2582276f9e8a1e1753
  </StrictMode>
);

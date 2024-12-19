import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Homepage from "./pages/Homepage/Homepage";
import "../public/assets/style/tailwind.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Homepage />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { InformationTop } from "./assets/components/informationTop";
import "./main.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InformationTop />
  </StrictMode>,
);

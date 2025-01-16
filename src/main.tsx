import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// import { App } from "./0_setup/App";  // with Stage, no light, no shadows enabled
// import { App } from "./1_setup/App"; // shadows enabled, with lights without Stage
// import { App } from "./2_clean_up/App"; // removing sphere and cube
// import { App } from "./3_loading_a_model/App";
import { App } from "./4_loading_draco_compressed__hard_way/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

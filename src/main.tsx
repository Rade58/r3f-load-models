import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// import { App } from "./0_setup/App";  // with Stage, no light, no shadows enabled
// import { App } from "./1_setup/App"; // shadows enabled, with lights without Stage
// import { App } from "./2_clean_up/App"; // removing sphere and cube
// import { App } from "./3_loading_a_model/App";
// import { App } from "./4_loading_draco_compressed__hard_way/App";
// import { App } from "./5_bandwith/App";
// import { App } from "./6_lazy_loading/App";
// import { App } from "./7_gltf_loading_with_drei/App";
// import { App } from "./8_preloading/App";
// import { App } from "./9_cloning_models/App";
// import { App } from "./10_GLTF_to_component/App";
// import { App } from "./11_animation/App";
import { App } from "./12_leva_n_animations/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

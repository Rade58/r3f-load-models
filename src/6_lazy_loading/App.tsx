import { Canvas, type RootState } from "@react-three/fiber";
import { Experience } from "./Experience";
import {
  CineonToneMapping,
  // ReinhardToneMapping,
  ACESFilmicToneMapping,
  SRGBColorSpace,
  // LinearSRGBColorSpace,
  // Color,
} from "three";
import { Leva } from "leva";

export function App() {
  return (
    <>
      <Leva />
      <Canvas
        // onCreated={created}
        // dpr={[1, 2]}
        flat
        gl={{
          // antialias: true,
          toneMapping: CineonToneMapping,
          // toneMapping: ACESFilmicToneMapping,
          outputColorSpace: SRGBColorSpace,
          toneMappingExposure: 1.3,
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 50,
          // position: [3, 2, 6],
          position: [-4, 3, 6],
          // position: [0, 0, 0],
          // zoom: 100,
        }}
        // orthographic
        shadows
      >
        {/* <color args={["blanchedalmond"]} attach={"background"} /> */}
        <Experience />
      </Canvas>
    </>
  );
}

/* function created(state: RootState) {
  console.log("created");

  state.gl.setClearColor(0xff0000, 0.5);

  state.scene.background = new Color("yellow");
}
 */

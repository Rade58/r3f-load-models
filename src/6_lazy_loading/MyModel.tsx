import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { DRACOLoader, GLTFLoader } from "three/examples/jsm/Addons.js";

export function MyModel() {
  const model = useLoader(
    GLTFLoader,
    // draco compressed
    // "/models/my_donut/donuts-c-2.glb",
    // bigger model in order to be loaded much slower
    "/models/FlightHelmet/glTF/FlightHelmet.gltf",
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("/draco/");
      loader.setDRACOLoader(dracoLoader);
    }
  );
  return <primitive object={model.scene} scale={5} position={[0, -1, 0]} />;
}

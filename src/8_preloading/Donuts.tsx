import { useGLTF } from "@react-three/drei";

export function Donuts() {
  const model = useGLTF("/models/my_donut/donuts-c-2.glb");

  return <primitive object={model.scene} scale={8} position={[2, -1.57, 2]} />;
}

// this will preload model
// yes, we use this string on two places like this
useGLTF.preload("/models/my_donut/donuts-c-2.glb");

import { useGLTF, Clone } from "@react-three/drei";

export function Donuts() {
  const model = useGLTF("/models/my_donut/donuts-c-2.glb");

  // return <primitive object={model.scene} scale={8} position={[2, -1.57, 2]} />;

  return (
    <>
      <Clone object={model.scene} scale={8} position={[2, -1.57, 2]} />;
      <Clone
        object={model.scene}
        scale={8}
        position-x={-3}
        position-y={-1.57}
      />
      ;
      <Clone
        object={model.scene}
        scale={8}
        position-z={-3}
        position-y={-1.57}
      />
      ;
    </>
  );
}

useGLTF.preload("/models/my_donut/donuts-c-2.glb");

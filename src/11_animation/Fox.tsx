import { useGLTF } from "@react-three/drei";

export function Fox(props: any) {
  const model = useGLTF("/models/Fox/glTF/Fox.gltf");

  return <primitive {...props} object={model.scene} />;
}

useGLTF.preload("/models/Fox/glTF/Fox.gltf");

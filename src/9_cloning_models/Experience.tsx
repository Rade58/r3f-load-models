// import { useLoader } from "@react-three/fiber";

// import { type Mesh } from "three";

import {
  OrbitControls,
  // Stage,
  //  useGLTF,
} from "@react-three/drei";

import { Perf } from "r3f-perf";

import { useControls } from "leva";
// import { DRACOLoader, GLTFLoader } from "three/examples/jsm/Addons.js";

// import { DRACOLoader, GLTFLoader } from "three/examples/jsm/Addons.js";
import { Donuts } from "./Donuts";

export function Experience() {
  // -----------------------------------------------------------

  // const model = useGLTF("/models/my_donut/donuts-c-2.glb");

  // console.log({ model });
  // -----------------------------------------------------------

  const someControls = useControls("_", { test: 1 });

  // const cubeRef = useRef<Mesh>(null);
  // const sphereRef = useRef<Mesh>(null);

  /* useFrame((state, delta) => {
    // const elapsed: number = state.clock.getElapsedTime();

    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta;
    }
  }); */

  // console.log({ sphereRef });

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      {/* ---------------------------------- */}
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      {/* ---------------------------------- */}

      {/* FLOOR */}
      <mesh
        receiveShadow
        rotation={[-Math.PI * 0.5, 0, 0]}
        scale={10}
        position-y={-1}
        // visible={false}
      >
        <planeGeometry />
        <meshStandardMaterial args={[{ color: "greenyellow" }]} />
      </mesh>

      {/* ---------------------------------------------------- */}
      {/* <primitive object={model.scene} scale={0.35} /> */}
      {/* for donuts */}
      {/* <primitive object={model.scene} scale={8} position={[2, -1.57, 2]} /> */}

      <Donuts />
    </>
  );
}

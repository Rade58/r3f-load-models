// import { useLoader } from "@react-three/fiber";

// import { type Mesh } from "three";

import {
  OrbitControls,
  // Stage,
  //  useGLTF,
} from "@react-three/drei";

import { Perf } from "r3f-perf";

import { useControls } from "leva";

import { Suspense } from "react";
import { Placeholder } from "./Placeholder";
import { Fox } from "./Fox";

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
      <directionalLight
        // shadow={{ normalBias: 0.04 }}
        shadow-normalBias={0.04}
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
      />
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

      <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
        <Fox scale={0.06} position-y={-0.99} />
      </Suspense>
    </>
  );
}

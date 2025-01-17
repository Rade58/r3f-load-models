import { useAnimations, useGLTF } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export function Fox(props: any) {
  const model = useGLTF("/models/Fox/glTF/Fox.gltf");

  // console.log(model.animations);
  const animApi = useAnimations(model.animations, model.scene);

  // console.log(animApi);

  const timeoitIdRef = useRef<number>();

  useEffect(() => {
    // animApi.actions["Walk"]?.play();
    // animApi.actions["Run"]?.play();
    // animApi.actions["Survey"]?.play();
    /* const action = animApi.actions["Walk"];
    if (action) {
      action.play();
    } */

    if (animApi.actions["Walk"]) {
      animApi.actions["Walk"].play();
    }

    timeoitIdRef.current = setTimeout(() => {
      if (animApi.actions["Walk"] && animApi.actions["Survey"]) {
        animApi.actions["Survey"].play();
        animApi.actions["Survey"].crossFadeFrom(
          animApi.actions["Walk"],
          1,
          false
        );
      }
    }, 4000);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoitIdRef.current) {
        clearTimeout(timeoitIdRef.current);
      }
    };
  }, []);

  return <primitive {...props} object={model.scene} />;
}

useGLTF.preload("/models/Fox/glTF/Fox.gltf");

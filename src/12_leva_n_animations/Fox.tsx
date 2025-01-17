import { useAnimations, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
// import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export function Fox(props: any) {
  const foxControls = useControls("fox", {
    animation: {
      options: {
        walk: { value: "Walk" },
        run: { value: "Run" },
        survey: { value: "Survey" },
      },
    },
  });

  console.log({ foxControls });

  const model = useGLTF("/models/Fox/glTF/Fox.gltf");

  // console.log(model.animations);
  const animApi = useAnimations(model.animations, model.scene);

  // console.log(animApi);

  // Yes this is a solution but this is hacky
  // This is only a solution when I'm doing leva
  // I don't like to relly on rerenders

  // Would never use something like this in real word example
  // todo:
  // rewrite this with xstate

  useEffect(() => {
    const action = animApi.actions[foxControls.animation.value];
    if (action !== null) {
      action.fadeIn(0.5).play();
    }

    return () => {
      // console.log("disposre");

      if (action !== null) {
        action.fadeOut(0.5).stop();
      }
    };
  }, [foxControls.animation]);

  return <primitive {...props} object={model.scene} />;
}

useGLTF.preload("/models/Fox/glTF/Fox.gltf");

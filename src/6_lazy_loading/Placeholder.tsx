import { type ReactNode } from "react";

export function Placeholder(props: {
  children?: ReactNode;

  scale?: [number, number, number];
  "position-y"?: number;
}) {
  return (
    <mesh
      // scale={[2, 3, 2]}
      // position-y={0.5}
      {...props}
    >
      <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
      <meshStandardMaterial color="mediumpurple" wireframe />
    </mesh>
  );
}

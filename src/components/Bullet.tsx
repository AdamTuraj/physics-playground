import { useEffect } from "react";

import { useSphere } from "@react-three/cannon";
import { useThree } from "@react-three/fiber";

const Bullet = ({ velocity }: { velocity: number }) => {
  const { mouse, viewport } = useThree();

  // Sets the initial position of the bullet to the x and y of the mouse
  const [ref, api] = useSphere(() => ({
    mass: 1,
    position: [
      (mouse.x * viewport.width) / 2,
      (mouse.y * viewport.height) / 2,
      1,
    ],
  }));

  useEffect(() => {
    api.velocity.set(0, 0, -velocity);
  }, []);

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.1, 32, 32]} />
      <meshStandardMaterial color="silver" />
    </mesh>
  );
};

export default Bullet;

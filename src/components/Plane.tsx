import { usePlane } from "@react-three/cannon";

const Plane = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -2.5, 0],
  }));
  return (
    <mesh ref={ref}>
      <planeGeometry />
      <meshStandardMaterial transparent opacity={0} />
    </mesh>
  );
};

export default Plane;

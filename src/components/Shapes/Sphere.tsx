import { useSphere } from "@react-three/cannon";
import { useThree } from "@react-three/fiber";

const Sphere = ({
  mass,
  color,
  size,
}: {
  mass: number;
  color: string;
  size: number;
}) => {
  const { mouse, viewport } = useThree();

  const [ref] = useSphere(() => ({
    mass,
    position: [
      (mouse.x * viewport.width) / 2,
      (mouse.y * viewport.height) / 2,
      0,
    ],
    args: [size],
  }));

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

export default Sphere;

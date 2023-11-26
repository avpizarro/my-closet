import * as THREE from "three";
import { extend } from "@react-three/fiber";

extend(THREE);
function Box(props) {
  return (
    <mesh {...props} receiveShadow={true} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial color={'white'} />
    </mesh>
  )
}
export default Box
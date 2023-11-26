import * as THREE from "three";

// Create a Box
function Box(props) {
  return (
    <mesh {...props} receiveShadow={true} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial color={'white'} />
    </mesh>
  )
}
export default Box
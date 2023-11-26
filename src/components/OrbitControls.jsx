import { extend, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

// Add controls to manipulate your scene
function Controls(props) {
  const { camera, gl } = useThree();
  return (
     <orbitControls attach={'orbitControls'} args={[camera, gl.domElement]} />
  )
}
export default Controls;
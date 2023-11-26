'use client';
import * as THREE from "three";
import { extend } from "@react-three/fiber";
import { Canvas } from '@react-three/fiber';
import styles from './Outfit.module.css';
import Floor from '../Floor'
import Box from '../Box';

extend(THREE)
function Outfit() {
return (

  <div className={styles.container}>
    <div className={styles.scene}>
      <Canvas
      shadows
      className={styles.canvas}
      camera={{
        position: [-6, 7, 7],
      }}
      >
        <ambientLight color={"white"} intensity={0.3} />
        <Box rotateX={3} rotateY={0.2} />
        <Floor position={[0, -1, 0]}/>
      </Canvas>
    </div>
  </div>
)
}
export default Outfit
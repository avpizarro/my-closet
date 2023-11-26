'use client';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import styles from './Outfit.module.css';
import Floor from '../Floor';
import Box from '../Box';
import LightBulb from '../LightBulb';
import OrbitControls from '../OrbitControls';
import Draggable from '../Draggable';

// Create a Threejs scene inside a Container
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
          <ambientLight color={'white'} intensity={0.3} />
          <LightBulb position={[0, 3, 0]} />
          <Draggable>
            <Box rotateX={3} rotateY={0.2} />
          </Draggable>
          <OrbitControls />
          <Floor position={[0, -1, 0]} />
        </Canvas>
      </div>
    </div>
  );
}
export default Outfit;

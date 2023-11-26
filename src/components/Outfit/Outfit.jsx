'use client';
import { Canvas } from '@react-three/fiber';
import styles from './Outfit.module.css';

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

      </Canvas>
    </div>
  </div>
)
}
export default Outfit
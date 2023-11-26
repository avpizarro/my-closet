import { useState } from 'react';

// Create a floor for our scene that changes
// colour when hovered
function Floor(props) {
  const [hovered, setHover] = useState(false)
  return (
    <mesh {...props} 
      receiveShadow
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[20,1,10]} />
      <meshPhysicalMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}
export default Floor
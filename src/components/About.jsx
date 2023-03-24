import { Container } from 'react-bootstrap';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';

const BackgroundSphere = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  inset: 0;
  margin: auto;
`;

const About = () => {
  return (
    <Container
      style={{ height: '100vh', scrollSnapAlign: 'center' }}
      className="position-relative"
    >
      <BackgroundSphere>
        <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={1}>
            <MeshDistortMaterial
              color="black"
              attach="material"
              distort={0.2}
              speed={1}
            />
          </Sphere>
        </Canvas>
      </BackgroundSphere>
      {/* About me text inside sphere */}
    </Container>
  );
};
export default About;

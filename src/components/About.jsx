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
  transform: translateY(2.5%);
`;

const Article = styled.article`
  max-width: 40ch;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1em;
`;

const Desc = styled.p``;

const About = () => {
  return (
    <Container
      style={{ height: '100vh', scrollSnapAlign: 'center' }}
      className="position-relative d-flex flex-column align-items-center justify-content-center"
      id="about"
    >
      <BackgroundSphere>
        <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={1.2}>
            <MeshDistortMaterial
              color="black"
              attach="material"
              distort={0.2}
              speed={1}
            />
          </Sphere>
        </Canvas>
      </BackgroundSphere>
      <Article>
        <Title>About Us</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem cum
          sapiente iste beatae vitae. Voluptatem temporibus labore iusto dolor
          ipsam!
        </Desc>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem cum
          sapiente iste beatae vitae. Voluptatem temporibus labore iusto dolor
          ipsam!
        </Desc>
      </Article>
    </Container>
  );
};
export default About;

import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Col, Container, Figure, Row } from 'react-bootstrap';
import styled from 'styled-components';
import formatCurrency from '../utils/formatCurrency';
import CyberpunkCar from './CyberpunkCar';
import ClassicMuscleCar from './ClassicMuscleCar';
import CartoonSportsCar from './CartoonSportsCar';
import Car from './Car';
import Mazda from './Mazda';
import Triumph from './Triumph';

const StyledFigure = styled(Figure)`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const StyledCaption = styled(Figure.Caption)`
  position: absolute;
  bottom: 15%;
  right: ${(props) => (props.reverse ? '' : '-40%')};
  left: ${(props) => (props.reverse ? '-40%' : '')};
  max-width: 40ch;
  word-break: break-all;
  background-color: white;
  border-radius: 10px;
  padding: 1em;
  color: black;
  font-size: 0.8rem;
`;

const StyledRow = styled(Row)`
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
`;

const BackgroundCircle = styled.div`
  width: 40rem;
  height: 40rem;
  border-radius: 50%;
  background-color: whitesmoke;
  z-index: -1;
  position: absolute;
  inset: 0;
  margin: auto;
`;

const CarItem = ({ car }) => {
  return (
    <Container
      style={{ height: '100vh', scrollSnapAlign: 'center' }}
      className="text-light"
      id={`car${car.id}`}
    >
      <StyledRow className="h-100" reverse={car.id % 2 === 1}>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="fs-1">{car.name}</h2>
          <p className="lead fs-2">
            Starting Price: {formatCurrency(car.startingPrice)}
          </p>
        </Col>
        <Col className="position-relative h-100">
          <BackgroundCircle></BackgroundCircle>
          <StyledFigure>
            <Canvas>
              <OrbitControls enableZoom={false} autoRotate />
              <Stage environemt="city" intensity={0.6}>
                {car.name === 'CP 5000' && <CyberpunkCar />}
                {car.name === 'Classic Muscle' && <ClassicMuscleCar />}
                {car.name === 'The Porsche' && <CartoonSportsCar />}
                {car.name === 'Speed' && <Car />}
                {car.name === 'Mazda RX-7' && <Mazda />}
                {car.name === 'Triumph Convertible' && <Triumph />}
              </Stage>
            </Canvas>
            <StyledCaption
              className="position-absolute"
              reverse={car.id % 2 === 1}
            >
              {car.attribution}
            </StyledCaption>
          </StyledFigure>
        </Col>
      </StyledRow>
    </Container>
  );
};
export default CarItem;

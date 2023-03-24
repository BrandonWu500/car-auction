import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 4rem;
`;

const Img = styled.img`
  position: absolute;
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  inset: 0;
  margin: auto;
  animation: animate 2s ease infinite alternate;

  @keyframes animate {
    to {
      transform: translateX(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Container style={{ height: '100vh', scrollSnapAlign: 'center' }}>
      <Row className="h-100 d-flex flex-col align-items-center justify-content-center">
        <Col>
          <Title>Car Auction</Title>
          <p className="lead fs-3 my-3">
            Cool, exotic cars. Low starting bids. All online.
          </p>
          <a className="btn btn-primary mt-4 fs-4 text-capitalize">
            Learn how it works
          </a>
        </Col>
        <Col className="position-relative h-100">
          <Img src="/images/1.png" alt="" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};
export default Hero;

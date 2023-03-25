import { useState } from 'react';
import { Button, Col, Container, ListGroup, Modal, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { ArrowDownCircleFill } from 'react-bootstrap-icons';

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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container
      style={{ height: '100vh', scrollSnapAlign: 'center' }}
      id="home"
      className="position-relative"
    >
      <Row className="h-100 d-flex flex-col align-items-center justify-content-center">
        <Col>
          <Title>Car Auction</Title>
          <p className="lead fs-3 my-3">
            Cool, exotic cars. Low starting bids. All online.
          </p>
          <Button
            className="btn btn-primary mt-4 fs-4 text-capitalize"
            onClick={handleShow}
          >
            Learn how it works
          </Button>
        </Col>
        <Col className="position-relative h-100">
          <Img src="/images/1.png" alt="" className="img-fluid" />
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>How it works</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
            <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
            <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        className="position-absolute fs-1 text-center"
        style={{ bottom: '2rem', left: '0', right: '0', margin: 'auto' }}
      >
        <h3>Scroll Down to View the Lineup</h3>
        <ArrowDownCircleFill id="blink" />
      </div>
    </Container>
  );
};
export default Hero;

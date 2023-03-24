import { useRef, useState } from 'react';
import { Button, Container, Form, Spinner, Toast } from 'react-bootstrap';
import Footer from './Footer';

const Contact = () => {
  const formRef = useRef(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSending(true);

    /* mimick sending message */
    setTimeout(() => {
      setIsSuccess(true);
      setIsSending(false);
      formRef.current.reset();
    }, 1500);
  };

  return (
    <section className="position-relative">
      <Container
        style={{ height: '100vh', scrollSnapAlign: 'center' }}
        className="position-relative d-flex flex-column align-items-center justify-content-center"
        id="contact"
      >
        <Form
          className="d-flex flex-column"
          onSubmit={handleSubmit}
          ref={formRef}
          method="post"
          style={{ width: '400px' }}
        >
          <h2 className="text-center">Contact Us</h2>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              placeholder="Enter message"
              required
            />
          </Form.Group>
          {isSending ? (
            <Spinner
              animation="border"
              role="status"
              className="align-self-center mt-3"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            <Button
              variant="primary"
              type="submit"
              className="align-self-center mt-3"
            >
              Send
            </Button>
          )}
          {isSuccess && (
            <Toast className="bg-success fs-5 w-100 mt-5">
              <Toast.Body>
                Success! We received your message and we'll get back to you
                shortly.
              </Toast.Body>
            </Toast>
          )}
        </Form>
      </Container>
      <Footer />
    </section>
  );
};
export default Contact;

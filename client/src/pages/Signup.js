import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }
  return (
    <Container>
      <Row>
        <Col md={6} className="signup__form--container">
          <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <h1>Login to your account</h1>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="my-3">
              <Button type="submit">Signup</Button>
            </Form.Group>
            <p>
              Have an account? <Link to="/login">Login</Link>{" "}
            </p>
          </Form>
        </Col>
        <Col md={6} className="signup__image--container"></Col>
      </Row>
    </Container>
  );
}

export default Signup;

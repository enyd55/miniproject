import React from "react";
import "./About.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import AboutUsSectionImg from "../../utils/images/about-us-section-img.jpg";
import ChooseSection from "../../components/ChooseSection/ChooseSection";

function About() {
  return (
    <div className="about-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">About Us</h1>
          <p className="text-center w-75 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            recusandae harum ullam repellat cum? Nisi unde, incidunt natus ut
            ratione dolore quasi at dolores molestias.
          </p>
        </div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0">
            <h2 className="mb-4 mb-lg-5" aligm="center">
              Contact Us
            </h2>

            <div className="container my-5 d-flex justify-content-center">
              <Form id="contact-form">
                <Row className="mb-3">
                  <Col sm={12} md={6} className="mb-3 mb-md-0">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="First name" />
                  </Col>
                  <Col sm={12} md={6}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="Last name" />
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="Your address" />
                </Form.Group>

                <Row className="mb-3">
                  <Col sm={12} md={6} className="mb-3 mb-md-0">
                    <Form.Label>Location</Form.Label>
                    <Form.Select defaultValue="London">
                      <option>London</option>
                      <option>Manchester</option>
                      <option>Liverpool</option>
                    </Form.Select>
                  </Col>
                  <Col sm={12} md={6}>
                    <Form.Label>Postcode</Form.Label>
                    <Form.Control placeholder="Postcode" />
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="danger btn-lg" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <img src={AboutUsSectionImg} className="img-fluid w-75" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

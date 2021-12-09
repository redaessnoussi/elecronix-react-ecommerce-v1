import React from "react";
import BrandName from "../../BrandName";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  UilInstagram,
  UilFacebook,
  UilTwitterAlt,
} from "@iconscout/react-unicons";

function Footer() {
  return (
    <>
      <div className="bg-primary-100 py-5">
        <Container>
          <Row>
            <Col>
              <BrandName />
              <p class="fw-light my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Col>
            <Col md="2">
              <h4 className="fw-bold mb-4">Company</h4>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <a href="!#" className="text-dark fw-light">
                    About
                  </a>
                </li>
                <li className="mb-3">
                  <a href="!#" className="text-dark fw-light">
                    Products
                  </a>
                </li>
                <li className="mb-3">
                  <a href="!#" className="text-dark fw-light">
                    Contact
                  </a>
                </li>
                <li className="mb-3">
                  <a href="!#" className="text-dark fw-light">
                    Blog
                  </a>
                </li>
                <li className="mb-0">
                  <a href="!#" className="text-dark fw-light">
                    Careers
                  </a>
                </li>
              </ul>
            </Col>
            <Col md="3">
              <h4 className="fw-bold mb-4">Information</h4>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <a href="!#" className="text-dark fw-light">
                    Help Center
                  </a>
                </li>
                <li className="mb-3">
                  <a href="!#" className="text-dark fw-light">
                    Payment Methods
                  </a>
                </li>
                <li className="mb-3">
                  <a href="!#" className="text-dark fw-light">
                    Return & Refund
                  </a>
                </li>
                <li className="mb-3">
                  <a href="!#" className="text-dark fw-light">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </Col>
            <Col md="2">
              <h4 className="fw-bold mb-4">Follow Us</h4>
              <Button className="p-1 me-3">
                <UilInstagram width="35" height="35" />
              </Button>
              <Button className="p-1 me-3">
                <UilTwitterAlt width="35" height="35" />
              </Button>
              <Button className="p-1">
                <UilFacebook width="35" height="35" />
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Footer;

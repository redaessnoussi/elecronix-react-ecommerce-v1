import React from "react";
import BrandName from "../../BrandName";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  UilInstagram,
  UilFacebook,
  UilTwitterAlt,
  UilPhone,
  UilEnvelope,
  UilMasterCard,
  UilPaypal,
} from "@iconscout/react-unicons";

const VisaIcon = () => (
  <svg
    width="32"
    height="20"
    viewBox="0 0 32 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="me-2"
  >
    <path
      d="M12 4.66602L6.02133 15.3327H2.66667V7.33268C2.64533 6.07002 2.29867 5.48602 1.33333 4.66602H5.33333V11.3327L9.33333 4.66602H12ZM13.312 4.66602L9.34267 15.3327H12L16 4.66602H13.312ZM28.6667 15.3327L28.708 13.2087L25.6667 13.166L24.604 15.3327H22.3227L28 4.66602H30.6667L31.396 15.3327H28.6667ZM28.6667 7.37402L26.6667 11.3327H28.6453L28.6667 7.37402ZM19.444 6.97135C20.2453 4.97002 22.6667 6.91668 23 7.11135C23.2773 6.69535 23.7507 6.02868 24 5.66735C23.056 4.58335 19.2427 3.52735 17.3053 5.91802C14 10.002 20.8053 11.1967 19.6107 12.834C18.8413 13.8887 16.7773 13.722 15.2773 12.722C15.0547 13.1393 14.36 14.3887 14.36 14.3887C15.5827 15.1967 16.4987 15.334 17.7773 15.334C19.056 15.334 21.5907 15.1327 22.3227 12.6393C23.3893 8.99935 18.556 9.19402 19.444 6.97135ZM0 0.666016H32V1.99935H0V0.666016ZM0 17.9993H32V19.3327H0V17.9993Z"
      fill="#383838"
    />
  </svg>
);

function Footer() {
  return (
    <>
      <div className="bg-primary-100 py-5">
        <Container>
          <Row className="mb-5">
            <Col>
              <BrandName />
              <p className="fw-light my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <ul className="list-unstyled">
                <li className="fw-light mb-3">
                  <UilPhone className="text-primary me-2" />
                  +1234567890
                </li>
                <li className="fw-light">
                  <UilEnvelope className="text-primary me-2" />
                  lovia@support.com
                </li>
              </ul>
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
          <hr />
          <Row>
            <Col>
              <p className="fw-light small mb-0">
                Copyright © 2021 Tronix. All Right Reseved
              </p>
            </Col>
            <Col className="text-end">
              <UilMasterCard className="me-2" />
              <VisaIcon />
              <UilPaypal />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Footer;

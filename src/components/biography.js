import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Biography() {
  return (
    <Container>
      <Row style={{ alignItems: 'center' }}>
        <Col
          xs={{ span: 12, order: 2 }}
          md={{ span: 6, order: 2 }}
          xl={{ span: 3, order: 1 }}
        >
          <div className="info-container left">
            <h5>Biography</h5>
            <div className="card-spacer"></div>
            <p style={{ maxWidth: '15.3125rem' }}>
              Work for money and develope for love! I’m Akanksha, an
              Fullstack Frontend Developer based in Gujarat.
            </p>
            <div className="card-spacer"></div>
          </div>
          <div className="info-container left">
            <h5>Contact</h5>
            <div className="card-spacer"></div>
            <p style={{ maxWidth: '15.3125rem' }}>
              Ahemdabad, Gujarat
              <br />
              akku@gmail.com
              <br />
              +91-1234567890
            </p>
            <div className="card-spacer"></div>
          </div>
          <div className="info-container left">
            <h5>Services</h5>
            <div className="card-spacer"></div>
            <p style={{ maxWidth: '15.3125rem' }}>
              Web Designing
              <br />
              Web Development
              <br />
              Animation
              <br />
            </p>
            <div className="card-spacer"></div>
          </div>
        </Col>
        <Col
          xs={{ span: 12, order: 1 }}
          md={{ span: 10, order: 1 }}
          xl={{ span: 6, order: 2 }}
        >
          <div className="banner-image-container">
            <img
              src="https://moonex.ibthemespro.com/assets/img/root/about-me/about-me-main-image-layer-2.png"
              style={{ zIndex: 2 }}
              alt="ima"
            />
            <img
              className="lay"
              src="https://moonex.ibthemespro.com/assets/img/root/about-me/about-me-main-image-mask.png"
              srcSet="https://moonex.ibthemespro.com/assets/img/about-me-main-image.jpg"
              alt="ima"
            />
            <img
              src="https://moonex.ibthemespro.com/assets/img/root/about-me/about-me-main-image-layer-1.png"
              alt="ima"
            />
          </div>
        </Col>
        <Col
          xs={{ span: 12, order: 3 }}
          md={{ span: 6, order: 3 }}
          xl={{ span: 3, order: 3 }}
          style={{ textAlign: 'end' }}
        >
          <div className="info-container right">
            <h5>Years of Experience</h5>
            <div className="card-spacer"></div>
            <p style={{ maxWidth: '15.3125rem' }}>
              <span>80</span>
            </p>
            <div className="card-spacer"></div>
          </div>
          <div className="info-container right">
            <h5>Satisfaction Clients</h5>
            <div className="card-spacer"></div>
            <p style={{ maxWidth: '15.3125rem' }}>
              <span>100</span>
            </p>
            <div className="card-spacer"></div>
          </div>
          <div className="info-container right">
            <h5>Clients Worldwide</h5>
            <div className="card-spacer"></div>
            <p style={{ maxWidth: '15.3125rem' }}>
              <span>1000</span>
            </p>
            <div className="card-spacer"></div>
          </div>
          <div className="info-container right">
            <h5>Projects Done</h5>
            <div className="card-spacer"></div>
            <p style={{ maxWidth: '15.3125rem' }}>
              <span>10</span>
            </p>
            <div className="card-spacer"></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Biography;

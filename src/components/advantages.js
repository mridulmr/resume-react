import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Spacer from '../elements/spacer';

function Advantages() {
  return (
    <Container>
      <h2 className="advantage-heading" data-aos="fade-up">
        My Advantage
      </h2>
      <Spacer />
      <Row>
        <Col xs={12} sm={6} md={4} lg={2}>
          <div className="skill-container" data-aos="zoom-in">
            <div className="image-container">
              <img src="https://moonex.ibthemespro.com/assets/img/root/advantages/image-1.png" />
              <span>90%</span>
            </div>
            <h6>Figma</h6>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2}>
          <div className="skill-container" data-aos="zoom-in">
            <div className="image-container">
              <img src="https://moonex.ibthemespro.com/assets/img/root/advantages/image-1.png" />
              <span>90%</span>
            </div>
            <h6>Figma</h6>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2}>
          <div className="skill-container" data-aos="zoom-in">
            <div className="image-container">
              <img src="https://moonex.ibthemespro.com/assets/img/root/advantages/image-1.png" />
              <span>90%</span>
            </div>
            <h6>Figma</h6>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2}>
          <div className="skill-container" data-aos="zoom-in">
            <div className="image-container">
              <img src="https://moonex.ibthemespro.com/assets/img/root/advantages/image-1.png" />
              <span>90%</span>
            </div>
            <h6>Figma</h6>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2}>
          <div className="skill-container" data-aos="zoom-in">
            <div className="image-container">
              <img src="https://moonex.ibthemespro.com/assets/img/root/advantages/image-1.png" />
              <span>90%</span>
            </div>
            <h6>Figma</h6>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2}>
          <div className="skill-container" data-aos="zoom-in">
            <div className="image-container">
              <img src="https://moonex.ibthemespro.com/assets/img/root/advantages/image-1.png" />
              <span>90%</span>
            </div>
            <h6>Figma</h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Advantages;

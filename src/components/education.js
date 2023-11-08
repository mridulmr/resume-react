import React, { useCallback, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Spacer from '../elements/spacer';
import Divider from '../elements/divider';
import { Swiper, SwiperSlide } from 'swiper/react';

function Education() {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <Container fluid className="education-container">
      <Container>
        <h2 className="advantage-heading">Education & Experience</h2>
        <Spacer />
        <Row>
          <Col xs={12} md={6} lg={4} className="exp-container">
            <span>2014</span>
            <ul>
              <li>
                <h4>Bachelor in Computer</h4>
                <p>College Name</p>
              </li>
              <li>
                <h4>Bachelor in Computer</h4>
                <p>College Name</p>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={4} className="exp-container">
            <span>2014</span>
            <ul>
              <li>
                <h4>Bachelor in Computer</h4>
                <p>College Name</p>
              </li>
              <li>
                <h4>Bachelor in Computer</h4>
                <p>College Name</p>
              </li>
              <li>
                <h4>Bachelor in Computer</h4>
                <p>College Name</p>
              </li>
              <li>
                <h4>Bachelor in Computer</h4>
                <p>College Name</p>
              </li>
              <li>
                <h4>Bachelor in Computer</h4>
                <p>College Name</p>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={4} className="exp-container">
            <span>2014</span>
            <ul>
              <li>
                <h4>Bachelor in Computer</h4>
                <p>College Name</p>
              </li>
              <li>
                <h4>Bachelor in Computer</h4>
                <p>College Name</p>
              </li>
              <li>
                <h4>Bachelor in Computer</h4>
                <p>College Name</p>
              </li>
              <li>
                <h4>Bachelor in Computer</h4>
                <p>College Name</p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Spacer />
      <Divider />
      <Spacer />
      <Container>
        <h2 className="advantage-heading">My Latest Projects</h2>
        <Spacer />
        <div className="position-relative">
          <Swiper ref={sliderRef} spaceBetween={50} slidesPerView={3}>
            <SwiperSlide>
              <div className="project-card">
                <div
                  className="project-image"
                  style={{
                    background:
                      'url(https://moonex.ibthemespro.com/assets/img/portfolio/work-3.png)',
                  }}
                ></div>
                <span>Type of Project</span>
                <h4>Title of Project</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-card">
                <div
                  className="project-image"
                  style={{
                    background:
                      'url(https://moonex.ibthemespro.com/assets/img/portfolio/work-3.png)',
                  }}
                ></div>
                <span>Type of Project</span>
                <h4>Title of Project</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-card">
                <div
                  className="project-image"
                  style={{
                    background:
                      'url(https://moonex.ibthemespro.com/assets/img/portfolio/work-3.png)',
                  }}
                ></div>
                <span>Type of Project</span>
                <h4>Title of Project</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-card">
                <div
                  className="project-image"
                  style={{
                    background:
                      'url(https://moonex.ibthemespro.com/assets/img/portfolio/work-3.png)',
                  }}
                ></div>
                <span>Type of Project</span>
                <h4>Title of Project</h4>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="prev-arrow" onClick={handlePrev} />
          <div className="next-arrow" onClick={handleNext} />
        </div>
      </Container>
    </Container>
  );
}

export default Education;

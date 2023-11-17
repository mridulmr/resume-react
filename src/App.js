import { Col, Container, Row } from 'react-bootstrap';
import Layout from './components/layout';
import Divider from './elements/divider';
import Spacer from './elements/spacer';
import Biography from './components/biography';
import Advantages from './components/advantages';
import Education from './components/education';
import Contact from './components/contact';
import AOS from 'aos';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 20,
      easing: 'ease-in-out',
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <Layout>
      <Container>
        <Row>
          <Col
            sm={{ span: 12, offset: 0 }}
            md={{ span: 10, offset: 0 }}
            xl={{ span: 10, offset: 1 }}
          >
            <h1 className="banner-h1">
              <span
                data-aos="fade-in"
                data-aos-duration="700"
                data-aos-delay="400"
              >
                Akanksha Kshatriya
              </span>
              <br />
              <span
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                Fullstack Frontend Developer
              </span>
              <br />
              <span
                data-aos="fade-in"
                data-aos-duration="900"
                data-aos-delay="600"
              >
                Based in Gujarat
              </span>
            </h1>
          </Col>
        </Row>
      </Container>

      <Spacer />

      <Biography />

      <Spacer />
      <Divider />
      <Spacer />

      <Advantages />

      <Spacer />
      <Divider />
      <Spacer />

      <Education />

      <Spacer />
      <Divider />
      <Spacer />

      <Contact />

      <Spacer />
      <Divider />
    </Layout>
  );
}

export default App;

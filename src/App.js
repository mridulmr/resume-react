import { Col, Container, Row } from 'react-bootstrap';
import Layout from './components/layout';
import Divider from './elements/divider';
import Spacer from './elements/spacer';
import Biography from './components/biography';
import Advantages from './components/advantages';
import Education from './components/education';
import Contact from './components/contact';

function App() {
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
              Akanksha Kshatriya
              <br />
              Fullstack Frontend Developer
              <br />
              Based in Gujarat
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

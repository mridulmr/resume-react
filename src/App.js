import { Col, Container, Row } from "react-bootstrap";
import Layout from "./components/layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Container>
          <Row>
            <Col xl={{ span: 10, offset: 1 }}>
              <h1 className="banner-h1">
                Akanksha K
                <br />
                Full stack Developer
                <br />
                Based in Gujarat
              </h1>
            </Col>
          </Row>
        </Container>
        <div className="spacer"></div>
        <Container>
          <Row style={{ alignItems: "center" }}>
            <Col xl={{ span: 3, order: 1 }}>
              <div className="info-container left">
                <h5>Biography</h5>
                <div className="card-spacer"></div>
                <p style={{ maxWidth: "15.3125rem" }}>
                  Work for money and design for love! I’m Bruno, an UI/UX
                  Interaction Designer based in Poland.
                </p>
                <div className="card-spacer"></div>
              </div>
              <div className="info-container left">
                <h5>Biography</h5>
                <div className="card-spacer"></div>
                <p style={{ maxWidth: "15.3125rem" }}>
                  Work for money and design for love! I’m Bruno, an UI/UX
                  Interaction Designer based in Poland.
                </p>
                <div className="card-spacer"></div>
              </div>
              <div className="info-container left">
                <h5>Biography</h5>
                <div className="card-spacer"></div>
                <p style={{ maxWidth: "15.3125rem" }}>
                  Work for money and design for love! I’m Bruno, an UI/UX
                  Interaction Designer based in Poland.
                </p>
                <div className="card-spacer"></div>
              </div>
            </Col>
            <Col xl={{ span: 6, order: 2 }}>
              <div className="banner-image-container">
                <img
                  src="https://moonex.ibthemespro.com/assets/img/root/about-me/about-me-main-image-layer-2.png"
                  style={{ zIndex: 2 }}
                />
                <img
                  className="lay"
                  src="https://moonex.ibthemespro.com/assets/img/root/about-me/about-me-main-image-mask.png"
                  srcSet="https://moonex.ibthemespro.com/assets/img/about-me-main-image.jpg"
                />
                <img src="https://moonex.ibthemespro.com/assets/img/root/about-me/about-me-main-image-layer-1.png" />
              </div>
            </Col>
            <Col xl={{ span: 3, order: 3 }} style={{ textAlign: "end" }}>
              <div className="info-container right">
                <h5>Years of<br></br>Exp</h5>
                <div className="card-spacer"></div>
                <p style={{ maxWidth: "15.3125rem" }}>
                  <span>80</span>
                </p>
                <div className="card-spacer"></div>
              </div>
              <div className="info-container right">
                <h5>Satisfaction<br></br>Clients</h5>
                <div className="card-spacer"></div>
                <p style={{ maxWidth: "15.3125rem" }}>
                  <span>100</span>
                </p>
                <div className="card-spacer"></div>
              </div>
              <div className="info-container right">
                <h5>Clients<br></br>Worldwide</h5>
                <div className="card-spacer"></div>
                <p style={{ maxWidth: "15.3125rem" }}>
                  <span>1000</span>
                </p>
                <div className="card-spacer"></div>
              </div>
              <div className="info-container right">
                <h5>Projects<br></br>Done</h5>
                <div className="card-spacer"></div>
                <p style={{ maxWidth: "15.3125rem" }}>
                  <span>10</span>
                </p>
                <div className="card-spacer"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}

export default App;

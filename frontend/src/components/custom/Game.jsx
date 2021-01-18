import React, { useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Button
} from "reactstrap";

function Game(props) {
  const [question, setQuestion] = useState(1);
  const onClick = (e) => {
    console.log("imclicked");
    setQuestion(prev => prev + 1)
  };
  return (
    <div className="content">
      <Row>
        <Col>
          <Row>
            <Col>
              <Card className="card-stats" style={{ marginBottom: "10rem" }}>
                <CardBody>
                  <Row>
                    <Col>
                      <div className="numbers" style={{ textAlign: "left" }}>
                        <p className="card-category">Queston 1 out of 10</p>
                        <CardTitle tag="p">
                          What is the name of this color?
                          <div style={{ backgroundColor: "red", height: "10rem", width: "10rem", borderRadius: "6px", margin: "1rem 0" }}>

                          </div>
                        </CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="8" xs="7">
                      <div className="numbers" style={{ textAlign: "left" }}>
                        <p className="card-category">A</p>
                        <CardTitle tag="p">
                          Blue
                    </CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="8" xs="7">
                      <div className="numbers" style={{ textAlign: "left" }}>
                        <p className="card-category">B</p>
                        <CardTitle tag="p">
                          Green
                    </CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="8" xs="7">
                      <div className="numbers" style={{ textAlign: "left" }}>
                        <p className="card-category">C</p>
                        <CardTitle tag="p">
                          Red
                    </CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>

              </Card>
            </Col>
            <Col>
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="8" xs="7">
                      <div className="numbers" style={{ textAlign: "left" }}>
                        <p className="card-category">D</p>
                        <CardTitle tag="p">
                          Black
                    </CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          {/* <div className="update ml-auto mr-auto">
            <Button
              className="btn-round"
              color="primary"
              type="submit"
            >
              Update Profile
            </Button>
          </div> */}
        </Col>
      </Row>
    </div >


    /* <div style={{ marginTop: "10rem" }}>
      <h1>hello im a game</h1>
      <div>{question}</div>
      <button onClick={onClick}>dfs</button>
    </div> */
  );
}



export default Game;

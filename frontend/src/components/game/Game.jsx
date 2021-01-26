import React, { useState } from "react";
import Speech from 'react-speech';
import TakePicture from "../TakePicture/TakePicture";


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
                          <Speech text="Bring me something blue!"/>
                           <br></br>
                           <TakePicture/>
                        </CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div >
  );
}



export default Game;

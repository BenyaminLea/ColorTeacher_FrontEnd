import React, { useContext, useState } from "react";
import Speech from 'react-speech';
import TakePicture from "../TakePicture/TakePicture";


import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import { UserContext } from "context/UserContext";


function Game(props) {

  const user = useContext(UserContext).user
  const [score, setScore] = useState(0)
  const [level, setLevel] = useState(0)
  const ColorArray = [["blue", "green", "red"], ["orange", "yellow", "pink"], ["purple", "black", "grey"]];
  const rendom = Math.floor(Math.random() * 3) + 1 
  const pick = rendom - 1
  var whatToSay = "Bring me something" + ColorArray[level][pick];
  const [question, setQuestion] = useState(1);
  const onClick = (e) => {
    console.log("imclicked");
    setQuestion(prev => prev + 1)
  };

  const updateScore = () => {
    setScore(score + 10)
    setLevel(level + 1)
    setQuestion(question + 1)
  }

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
                          <Speech text={whatToSay}/>
                           <br></br>
                          <TakePicture
                          updateScore={updateScore}
                          color={ColorArray[level][pick]}/>
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

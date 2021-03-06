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
import { postScore } from "../lib/api";


function Game(props) {

  const user = useContext(UserContext).user
  const [score, setScore] = useState(0)
  const [level, setLevel] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const ColorArray = [["blue", "green", "red"], ["orange", "yellow", "pink"], ["purple", "black", "grey"]];
  const rendom = Math.floor(Math.random() * 3) + 1 
  const pick = rendom - 1
  var whatToSay = "Bring me something" + ColorArray[level][pick];
  const [question, setQuestion] = useState(1);
  const onClick = (e) => {
    console.log("imclicked");
    setQuestion(prev => prev + 1)
  };

  const updateScore = async (bool) => {
    let quest=question;
    let points=score
    if (bool && level<3){
      setScore(score + 10)
      setLevel(level + 1)
      points=points+10
    }
    else if (bool && level===3){
      setScore(score + 10)
      points=points+10
    }
    quest=quest+1
    setQuestion(question + 1)
    if (quest===4){
      const res = await postScore(user.id,points)
     if (res){
        setGameOver(true)
      }
    }
  }

  return (
    <div className="content">
      <Row>
        <Col>
          <Row>
            <Col>
              <Card className="card-stats" style={{ marginBottom: "10rem" }}>
                {!gameOver && <CardBody>
                  <Row>
                    <Col>
                      <div className="numbers" style={{ textAlign: "left" }}>
                        <p className="card-category">Queston {question} out of 3</p>
                        <p> Score {score} </p>
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
                </CardBody>}
                {gameOver && <h2 style={{ marginTop: "50px", marginLeft:"10px", marginRight:"10px" }}> The game is over ! Please return to the dashboard to see your rank. </h2> }
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div >
  );
}



export default Game;

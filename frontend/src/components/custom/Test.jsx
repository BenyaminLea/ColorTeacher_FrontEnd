import React, { useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

function Play(props) {
  const [question, setQuestion] = useState(1);
  const onClick = (e) => {
    console.log("imclicked");
    setQuestion(prev => prev + 1)
  };
  return (
    <div className="content">
      <Row>
        <Col style={{ border: "1px solid black" }}>
          wazzzz
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



export default Play;

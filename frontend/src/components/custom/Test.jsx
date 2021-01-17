import React, { useState } from "react";

function Play(props) {
  const [question, setQuestion] = useState(1);
  const onClick = (e) => {
    console.log("imclicked");
    setQuestion(prev => prev + 1)
  };
  return (
    <div style={{ marginTop: "10rem" }}>
      <h1>hello im a game</h1>
      <div>{question}</div>
      <button onClick={onClick}>dfs</button>
    </div>
  );
}

export default Play;

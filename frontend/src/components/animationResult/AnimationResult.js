import React, { useState } from "react";
import { Form, Button, Card, Modal } from "react-bootstrap";
import { postSignUp } from "../lib/api";
import fail from "./failed.jpg";
import win from "./succses.jpg";
class AnimationResult extends React.Component {
  render() {
    if (this.props.res === false) {
      return (
        <div>
          <img src={fail} style={{ width: 400, height: 500 }} />
        </div>
      );
    } else {
      return (
        <div>
          <img src={win} style={{ width: 400, height: 500 }} />
        </div>
      );
    }
  }
}

export default AnimationResult;

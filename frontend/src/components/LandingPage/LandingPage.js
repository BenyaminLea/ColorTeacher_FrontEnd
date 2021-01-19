import { Button, Modal, Navbar, Nav } from "react-bootstrap";
import SignUp from "components/SignUp/SignUp";
import { Link, Redirect } from "react-router-dom";
import React, { useContext, useState } from "react";
import Login from "../Login/Login";
import { getUsers } from "../lib/api";
import { UserContext } from "context/UserContext";

export default function LandingPage() {
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [SignUpIsOpen, setSignUpIsOpen] = useState(false);
  const context = useContext(UserContext);

  if (localStorage.getItem("user")) {
    context.setUserInfo(JSON.parse(localStorage.getItem("user")));
  }

  const closeLoginModal = () => {
    setLoginIsOpen(false);
  };

  const openLoginModal = () => {
    setLoginIsOpen(true);
  };

  const closeSignUpModal = () => {
    setSignUpIsOpen(false);
  };

  const openSignUpModal = () => {
    setSignUpIsOpen(true);
  };

  return (
    <>
      <div className="mt-5 d-flex justify-content-center">
        <Button
          variant="primary"
          className="mr-4 mt-5"
          onClick={openLoginModal}
        >
          Login
        </Button>
        <Button
          variant="success"
          className="ml-4 mt-5"
          onClick={openSignUpModal}
        >
          Sign Up
        </Button>
      </div>
      <Modal className="modals" show={loginIsOpen} onHide={closeLoginModal}>
        <Login />
      </Modal>
      <Modal className="modals" show={SignUpIsOpen} onHide={closeSignUpModal}>
        <SignUp />
      </Modal>
    </>
  );
}

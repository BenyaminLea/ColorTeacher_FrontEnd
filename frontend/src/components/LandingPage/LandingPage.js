import { Button, Modal } from "react-bootstrap";
import SignUp from "components/SignUp/SignUp";
import React, { useState } from "react";
import Dashboard from "layouts/Admin";
import Sidebar from "components/Sidebar/Sidebar";
import routes from "routes";

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSignUpModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
      <>
    <div className="mt-5">
      <Button className="mt-5" onClick={openModal}>
        Sign Up
      </Button>
    </div>
      <Modal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={closeSignUpModal}
      >
        <SignUp />
      </Modal>
      </>
  );
}

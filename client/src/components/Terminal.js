import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { ReactTerminal } from "react-terminal";
import { Redirect } from "react-router-dom";
import "../css/terminal.css";
const ModalExample = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const commands = {
    whoami: "jackharper",
    cd: (directory) => <Redirect to="/app" />,
  };
  return (
    <div className="terminal">
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody style={{ height: "500px" }}>
          <ReactTerminal showControlButtons={true} commands={commands} />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalExample;

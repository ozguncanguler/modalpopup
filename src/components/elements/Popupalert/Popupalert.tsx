import { useState } from "react";
import "../../../pstyle.scss";
import Button from "./button/button";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "./modal/modal";

function Popupalert() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Open modal</Button>
      <Modal
        show={showModal}
        setShow={setShowModal}
        // hideCloseButton
      >
        <ModalHeader>
          <h2>Modal header</h2>
        </ModalHeader>
        <ModalBody>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            maxime dolorem asperiores laboriosam ad delectus ea. Tempora tempore
            repellendus laudantium fugiat saepe mollitia eius illo possimus
            laborum consequuntur, tenetur neque.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setShowModal(false)}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Popupalert;

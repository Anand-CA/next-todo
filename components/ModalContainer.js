import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Input from "@material-tailwind/react/Input";
import axios from "axios";
import { update_todo } from "../features/todoSlice";
import { useDispatch } from "react-redux";

function ModalContainer({ id, text, showModal, setShowModal }) {
  const [updateText, setUpdateText] = useState("");
  const dispatch = useDispatch();
  console.log(updateText);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("updated");
    if (updateText) {
      axios
        .patch(
          `https://next-todo-kappa.vercel.app/api/todo/updateTodo?id=${id}&text=${updateText}`
        )
        .then((res) => {
          dispatch(
            update_todo({
              id: res.data.id,
              text: res.data.text,
            })
          );
          setUpdateText("");
          setShowModal(false);
        });
    }
  };

  return (
    <div className="">
      <Modal size="lg" active={showModal} toggler={() => setShowModal(false)}>
        <form onSubmit={handleUpdate}>
          <ModalHeader toggler={() => setShowModal(false)}>
            Update Todo
          </ModalHeader>
          <ModalBody>
            <Input
              type="text"
              value={updateText}
              onChange={(e) => setUpdateText(e.target.value)}
              color="lightBlue"
              size="lg"
              outline={true}
              placeholder={text}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="red"
              buttonType="link"
              onClick={(e) => setShowModal(false)}
              ripple="dark"
            >
              Close
            </Button>
            <Button
              color="green"
              onClick={(e) => setShowModal(false)}
              ripple="light"
            >
              Update
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}

export default ModalContainer;

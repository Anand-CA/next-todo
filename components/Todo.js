import Modal from "./ModalContainer";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delete_todo, selectTodo } from "../features/todoSlice";

export default function Todo({ no, id, text }) {
  const todos = useSelector(selectTodo);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    console.log(id);
    axios
      .delete(`https://next-todo-kappa.vercel.app/api/todo/deleteTodo?id=${id}`)
      .then((res) => {
        dispatch(
          delete_todo({
            id: res.data.id,
          })
        );
      });
  };
  return (
    <>
      <Modal
        id={id}
        text={text}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <div className="duration-300 hover:scale-105 border-2 flex space-x-2 p-3 items-center rounded-lg">
        <p>{no + 1}.</p>
        <p className="select-none	 flex-1 font-semibold">{text}</p>

        <div onClick={() => setShowModal(true)} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path
              fillRule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div onClick={() => handleDelete()} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

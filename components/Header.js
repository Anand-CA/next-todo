import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_todo } from "../features/todoSlice";

export default function Header() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://next-todo-kappa.vercel.app/api/todo/createTodo`, {
        text: todoText,
        finished: false,
      })
      .then((res) => {
        dispatch(add_todo(res.data));
        setTodoText("");
      });
  };
  return (
    <div className="py-16 flex flex-col items-center space-y-4">
      <h1 className="text-4xl font-bold">Todo Mern Application</h1>

      <form onSubmit={handleSubmit} className="flex space-x-2 items-center">
        <input
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          className=" bg-gray-100 py-3 px-6 border focus:outline-none rounded-md"
          type="text"
          placeholder="enter your todo here ..."
        />
        <button
          disabled={!todoText}
          type="submit"
          className="cursor-pointer bg-gray-100 p-3 rounded-md border"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

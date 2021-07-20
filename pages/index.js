import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Todo from "../components/Todo";
import { selectTodo, setTodos } from "../features/todoSlice";

export default function Home({ Todos }) {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodo);
  useEffect(() => {
    dispatch(setTodos(Todos));
  }, []);
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="pb-5 mx-auto max-w-md space-y-5">
        {todos?.map((t, index) => (
          <Todo key={t._id} no={index} id={t._id} text={t.text} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const todosRes = await fetch(`https://next-todo-kappa.vercel.app/api/todo`);
  const Todos = await todosRes.json();

  return {
    props: { Todos },
  };
}

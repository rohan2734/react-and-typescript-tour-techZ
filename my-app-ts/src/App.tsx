import React, { Fragment, useState } from "react";
import "./App.css";

type FormElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  complete: boolean;
}

// interface ITodo2 extends ITodo{
//   tags: string[]
// }

export default function App(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]); //ITodo[],means array of objects

  //<string> is generally called,a generic in typescript

  // const sum = (a: number,b : number) : number => {
  //   return a + b
  // }

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text: text, complete: false }];

    setTodos(newTodos);
  };
  // console.log(todos);
  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos]; //dont forget to make a clone of it, otherwise you will mutate the state
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];

    newTodos.splice(index, 1);

    setTodos(newTodos);
  };
  return (
    <Fragment>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        ></input>
        <button type="submit">Add todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => (
          <Fragment key={index}>
            <div
              style={{ textDecoration: todo.complete ? "Line-through" : " " }}
            >
              {todo.text}
            </div>
            <button type="button" onClick={(): void => completeTodo(index)}>
              {" "}
              {todo.complete ? "Incomplete" : "Complete"}
            </button>
            <button type="button" onClick={() => removeTodo(index)}>
              Remove todo {index}
            </button>
          </Fragment>
        ))}
      </section>
    </Fragment>
  );
}

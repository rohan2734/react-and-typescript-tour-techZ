
import React,{Fragment,useState} from "react";
import './App.css';

type FormElem = React.FormEvent<HTMLFormElement>

interface ITodo {
  text : string
  complete: boolean
}

// interface ITodo2 extends ITodo{
//   tags: string[]
// }

export default function App(): JSX.Element {

  const [value,setValue] = useState<string>("")
  const [todos, setTodos ] = useState<ITodo[]>([]) //ITodo[],means array of objects

  //<string> is generally called,a generic in typescript
  
  // const sum = (a: number,b : number) : number => {
  //   return a + b
  // }

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  const addTodo = (text : string) => {
    const newTodos:ITodo[] = [...todos,{text:text,complete:false}]

    setTodos(newTodos)
  }
  console.log(todos);
  
    return (
      <Fragment>
        <h1>Todo</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={value} onChange={e => setValue(e.target.value)} required></input>
          <button type="submit">Add todo</button>
        </form>
      </Fragment>
    );
  
  
}



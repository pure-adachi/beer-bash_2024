import { useState } from "react"
import Todo from "./Todo"

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: "hoge" },
    { id: 2, name: "fuga" },
    { id: 3, name: "piyo" },
  ])

  const add = () => {
    const id = Math.max(0, ...todos.map(({ id }) => id)) + 1
    const newTodo = { id, name: `add${id}` }

    setTodos([newTodo, ...todos])
  }

  const clickDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <header>
        <p>リスト</p>
        <button onClick={add}>追加</button>
      </header>
      <ul>
        {todos.map(todo => <Todo key={todo.id} todo={todo} del={clickDelete} />)}
      </ul>
    </div>
  );
}

export default App;

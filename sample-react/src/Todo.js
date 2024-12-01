const Todo = (props) => {
  const todo = props.todo

  return <li><div>{todo.name}</div><button onClick={() => props.del(todo.id)}>削除</button></li>
}

export default Todo
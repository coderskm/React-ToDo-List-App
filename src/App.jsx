import { useEffect, useState } from "react"
import CreateTodo from "./components/CreateTodo";
import ReadTodo from "./components/ReadTodo";



function App() {
  let oldTodoList = localStorage.getItem('todolist');
  const [todoList, setTodoList] = useState(JSON.parse(oldTodoList)|| []);

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(todoList));
  }, [todoList])
  
  const addTodoList = (title) => {
    const updateTodoList = [...todoList, { id: Math.floor(Math.random() * 9999), title:title }];
    setTodoList(updateTodoList);
    console.log(updateTodoList);
  }

  const editTodoList = (id, newTitle)=>{
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todoList, title: newTitle };
      }
      return todo;
    })
    setTodoList(updatedTodoList);
  }

  const removeTodoList = (id) => {
    const updateTodo = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList(updateTodo);
  }


  return (
    <div>
      <h1>React To-do App</h1>
      <CreateTodo onAdd={addTodoList} />
      <ReadTodo onEdit={editTodoList} onDelete={removeTodoList} todoList={todoList} />
      {todoList.length > 0 ? <button onClick={() => setTodoList([])}>Empty</button> : null}
    </div>
  );
}

export default App
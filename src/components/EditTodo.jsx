import { useState } from "react"

function EditTodo({ onEdit, singleTodo, setEdit }) {
    const [todoTitle, setTodoTitle] = useState(singleTodo.title);
    const handleSubmit = () => { 
        onEdit(singleTodo.id, todoTitle);
        setEdit(false)
    }
    
    
  return (
      <form onSubmit={handleSubmit}>
          <input type="text" value={todoTitle} onChange={(e)=>setTodoTitle(e.target.value)} />
          <button>Save</button>
    </form>
  )
}

export default EditTodo
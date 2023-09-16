import { useState } from "react";
import EditTodo from "./EditTodo";

function DeleteTodo({ onEdit, onDelete, singleTodo }) {
  const [edit, setEdit] = useState(false);
  const handleEdit = () =>{
    setEdit(!edit);
  }
  let editTag = <h1> {singleTodo.title}</h1>;
  if (edit) {
    editTag = (
      <EditTodo onEdit={ onEdit} singleTodo={singleTodo} setEdit={setEdit} />
    )
  }
  return (
      <div>
      {editTag}
      <button onClick={handleEdit}>edit</button>
      <button onClick={()=>onDelete(singleTodo.id)}>delete</button>
    </div>
  )
  }
export default DeleteTodo;
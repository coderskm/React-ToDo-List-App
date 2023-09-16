import EditTodo from "./DeleteTodo"

function ShowTodo({onEdit, onDelete, todoList}) {
  const renderList = todoList.map((item,idx) => {
    return <EditTodo onEdit={onEdit} onDelete={onDelete} key={idx} singleTodo={ item} />
  } )
  return (<div>{renderList}</div>)
}

export default ShowTodo


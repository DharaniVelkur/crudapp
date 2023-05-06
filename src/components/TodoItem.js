import React from "react";

const TodoItem = (props) => {
  return (
    <>
    <div className="d-flex justify-content-between">
      <div>
        <h4>{props.todo.title}</h4>
        <p>{props.todo.desc}</p>
      </div>
      <div>
        <button
          className="btn btn-info btn-sm mx-2"
          onClick={()=>{
            props.onEdit(props.todo)
          }}
        >
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            props.onDelete(props.todo);
          }}
        >
          Delete
        </button>
      </div>
    </div>
    <hr/>
    </>
  );
};

export default TodoItem;

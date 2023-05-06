import React from "react";

const AddTodo = ({addtodo,title,setTitle,desc,setDesc,editTodo,updateTodo}) => {
 
    const submit =(e)=>{
        e.preventDefault();
        if(!title||!desc ===""){
            alert('Empty fields are not allowed')
        }else if(!editTodo){
            addtodo(title,desc);
            setTitle("");
            setDesc("");
        }else{
            updateTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
  return (
    <div>
      <form className="container" onSubmit={submit}>
        <h3 className="text-center my-2">Add a Todo</h3>
        <div className="mb-3 ">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            onChange={(e)=>{setDesc(e.target.value)}}
          />
        </div>
        
        <button type="submit" className="btn btn-primary btn-sm">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;

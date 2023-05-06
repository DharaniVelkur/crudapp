import React from 'react'
import TodoItem from './TodoItem'

function Todos(props) {
    let mystyle={
        minHeight:'100vh'
    }
  return (
    <div className='container my-3' style={mystyle}>
      <h3 className=' my-3'>Todos List</h3>
      {props.todos.length===0 ?'No items to display':
      props.todos.map((todo)=>{
        return (
            <TodoItem todo={todo} key={todo.sno} onEdit={props.onEdit} onDelete={props.onDelete}/>)
      })}
    </div>
  )
}

export default Todos

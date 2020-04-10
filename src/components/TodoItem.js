import React from 'react';

function TodoItem() {
  return (
    <div>
      <div className="todo-item">   
          <input type="checkbox"/>
          <p>Sweep floors</p> 
      </div>
      <div className="todo-item"> 
          <input type="checkbox"/>
          <p>Clean gutters</p>
      </div> 
      <div className="todo-item"> 
          <input type="checkbox"/>
          <p>Rob the federal reserve blind</p>       
      </div>
    </div>
  )
}

export default TodoItem
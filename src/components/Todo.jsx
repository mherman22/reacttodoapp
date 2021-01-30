import React from 'react';

/**********************************
 * @author herman muhereza        *
 * <hermanmuhereza22@gmail.com>   *
 * <king.herman0001@gmail.com>    *
 *                                *
 **********************************/

 
function Todo ({todo, index, completeTodo,removeTodo}){
    return(
        <div className="todo" style={{textDecoration:todo.isCompleted?'line-through':'none'}}>
            {todo.text}
            <div>
                <button onClick={()=>completeTodo(index)}>complete</button>
                <button onClick={()=>removeTodo(index)}>x</button>
            </div>
            
        </div>
    )
}
export default Todo
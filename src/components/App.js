import React, { useState } from 'react';
import '../App.css';
import Todo from './Todo';
import TodoForm from './TodoForm';
import todosdata from './todosdata';

/**********************************
 * @author herman muhereza        *
 * <hermanmuhereza22@gmail.com>   *
 * <king.herman0001@gmail.com>    *
 *                                *
 **********************************/

function App (){
    const [todos,setTodos] = useState(todosdata)
//adding a new todo-item
    const addTodo = text => {
        const newTodos = [...todos,{text}]
        setTodos(newTodos);
    }

//completion of a given item
    const completeTodo = index => {
        const newTodos = [...todos]
        newTodos[index].isCompleted = true;
        setTodos(newTodos)
    }
//removal of a todo item from the list
    const removeTodo = index => {
        const newTodos = [...todos]
        newTodos.splice(index,1)
        setTodos(newTodos)
    }
    
    //passing todosdata to the Todo component by updating the todos using the map function
    const updatedtOdos = todos.map((todo,index)=> <Todo 
                                                        key={index} 
                                                        index={index} 
                                                        todo={todo} 
                                                        completeTodo={completeTodo}
                                                        removeTodo={removeTodo}
                                                    />)
    return(
        <div className="app">
            <div className="todo-list">
                <h1>{updatedtOdos}</h1>
                <TodoForm addTodo={addTodo} />
            </div>
        </div>
        
    )
}
export default App
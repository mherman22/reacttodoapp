import React, { useState } from 'react';

/**********************************
 * @author herman muhereza        *
 * <hermanmuhereza22@gmail.com>   *
 * <king.herman0001@gmail.com>    *
 *                                *
 **********************************/

 
function TodoForm ({addTodo}){
    const [value,setValue] = useState("");

    //onsubmition of the form
    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue("");
    }
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="type"
                placeholder="add today's activity..."
                value={value}
                className="input"
                onChange={e => {setValue(e.target.value)}}
            />
        </form>
    )
}

export default TodoForm
import React, {useState, useReducer} from "react";
import {reducer, initialState} from "../reducers/Reducer"

function Todo () {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [newTodo, setNewTodo] = useState();

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    const toggleComplete = todoId => {
        dispatch({type: "TOGGLE_COMPLETED", payload: todoId})
    }

    const clearCompleted = e => {
        e.preventDefault();
        dispatch({type: "CLEAR_COMPLETE"})
    }
    
        return (
            <div>
                <input className="title-input" type="text" name="newTodo" value={newTodo} onChange={handleChanges}/>

                <button onClick={() => dispatch({type: "ADD_TODO", payload:newTodo})}>Add Task</button>

                <button className="clear-btn" onClick={clearCompleted}>Clear Completed</button>

            <div className="todo-list">
                {state.todo.map((currentValue, index) => (
                    <h3 key={index} className={`task${currentValue.completed ? "completed" : ""}`} onClick={() => toggleComplete(currentValue.id)}>{currentValue.task}</h3>
                    ))}
            </div>
            
            </div>
        );
}
export default Todo;
import React, {useState, useReducer} from "react";
import {reducer, initialState} from "../reducers/Reducer"

function Todo () {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    // function addTask () {

    // }
        return (
            <div>
                <div className="submit"onClick={dispatch ({type: "ADD_TODO"})}>
                    <p>{state.task}</p>
                </div>
            <div className="todo-list">
                {console.log(state)}
                {state.map(task => (
                    <Todo key={task.id} task={task} toggleItem={state.toggleItem} />
                    ))};
            </div>

            <button className="clear-btn" onClick={dispatch ({type: "TOGGLE_COMPLETED"})}>Clear Completed</button>
            
            </div>
        );
}
export default Todo;
import React, {useState, useReducer} from "react";
import {reducer, todoList} from "../reducers/Reducer"

const TodoForm = () => {
    const [state, dispatch] = useReducer(reducer, todoList);
    return (
        console.log(todoList)
    );
}
export default TodoForm;
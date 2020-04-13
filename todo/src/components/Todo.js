import React, {useState, useReducer} from "react";
import {reducer, todoList} from "../reducers/Reducer"

function Todo () {
    const [state, dispatch] = useReducer(reducer, todoList);


    return null; 
}

export default Todo;
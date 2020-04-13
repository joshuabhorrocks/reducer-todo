import React from "react";

export const initialState = [
    {
        task: "Learn about reducers", 
        completed: false, 
        id: 1
    },
  ]

export const reducer = (state, action) => {
    switch (action.type) {
        // case "ADD_TODO":
        //     const newTodo = {
        //         item: "",
        //         completed: false,
        //         id:Date.now()
        //     }
        //     return {
        //         ...state,
        //         todoList: [...state.initialState, newTodo]
        //     }
        // case "TOGGLE_COMPLETED":
        //     const completed = {

        //     }
        //     return {
        //         ...state,
        //         todoList: [...state.initialState, completed]
        //     }
        default:
            return state;
    }
}

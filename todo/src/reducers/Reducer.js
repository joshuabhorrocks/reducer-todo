import React from "react";

export const todoList = [
    {
        item: "Learn about reducers", 
        completed: false, 
        id:Date.now()
    },
    {
        item: "Complete this assignment", 
        completed: false, 
        id:Date.now()
    }
  ]

export function reducer (state, action) {
    switch(action.type) {
        default:
        // case "ADD_TODO":
        //     const newTodo = {
        //         // item: ,
        //         // completed: ,
        //         // id:
        //     }
            return state;

    }
}

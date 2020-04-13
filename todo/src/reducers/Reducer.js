import React from "react";

export const todoList = [
    {
        item: "Learn about reducers", 
        completed: false, 
        id:Date.now()
    }
  ]

export const reducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
        // case "ADD_TODO":
        //     const newTodo = {
        //         // item: ,
        //         // completed: ,
        //         // id:
        //     }

    }
}

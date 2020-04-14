import React from "react";

export const initialState = {
    todo: [    
    {
        task: "Learn about reducers", 
        completed: false, 
        id: 1
    }
]
}
export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const addTodo = {
                task: action.payload,
                completed: false,
                id: Date.now()
            }
            return {
                ...state,
                todo: [...state.todo, addTodo]
            }
        case "TOGGLE_COMPLETED":
            return {
                ...state,
                todo: state.todo.map(item => {
                    if (action.payload === item.id) {
                        return {
                            ...item,
                            completed: !item.completed
                        }
                    } 
                    return item;
                })
            }
        case "CLEAR_COMPLETE":
            return {
                ...state,
                todo: state.todo.filter(item => !item.completed)
            }
        default:
            return state;
            
    }
}

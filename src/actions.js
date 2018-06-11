import React from 'react'

export const MARK_COMPLETE = 'MARK_COMPLETE'
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'

export const markComplete = (index) => {
    const action = {
        type: MARK_COMPLETE,
        index: index
    }
}

export const addTodo = (text) => {
    const action = {
        type: ADD_TODO,
        text: text
    }
}

export const deleteTodo = (index) => {
    const action = {
        type: DELETE_TODO,
        index: index
    }
}

export const clearCompleted = (index) => {
    const action = {
        type: CLEAR_COMPLETED,
        index: index
    }
}
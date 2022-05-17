import React from "react"
import TodoItemProps from "./TodoItemType"



const TodoItem: React.FC<TodoItemProps> = ({ id, content }) => {
    return (
        <li>-{content}</li>
    )
}

export default TodoItem
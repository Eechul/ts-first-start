import React from "react"


type TodoItemProps = {
    content: string
}

const TodoItem: React.FC<TodoItemProps> = ({ content }) => {
    return (
        <>-{content}</>
    )
}

export default TodoItem
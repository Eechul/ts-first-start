import React, { useState } from "react"

const TodoInput: React.FC<any> = () => {
    const [value, setValue] = useState<string>("")

    return (
        <>
            <input type="text" />
        </>
    )
}
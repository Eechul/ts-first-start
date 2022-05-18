import React, { useState } from "react"

const TodoInput: React.FC<any> = ({ fnSave }) => {
    const [value, setValue] = useState<string>("")

    const handleTextChange = (e: any) => {
        setValue(e.target.value)
    }

    const handleTextConfirm = (e: any) => {
        if(e.keyCode === 13) {
            fnSave(e.target.value)
            setValue("")
        }
    }

    return (
        <>
            <input type="text" value={value} onChange={(e) => handleTextChange(e)} onKeyUp={handleTextConfirm}/>
        </>
    )
}

export default TodoInput
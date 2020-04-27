import React, { useState } from 'react'

export default function AddMessage({ onCreate }) {
    const [value, setValue] = useState("")

    function submitHandler(e) {
        e.preventDefault()

        if (value.trim()) {
            onCreate(value)
            setValue("")
        }
    }

    function handleChange(e) {
        if (e.key == 'Enter' && e.ctrlKey) {
            submitHandler(e)
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <textarea 
                rows="5" 
                type="text" 
                className="newMessage" 
                value={value} 
                onChange={e => setValue(e.target.value)} 
                onKeyDown={handleChange}
            >
            </textarea>        
            <button 
                type="submit"
            >
                Написать консультанту
            </button>
        </form>
    )
}

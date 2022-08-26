
import {useState} from 'react'


const ToDoForm = ()=>{

    const [todoText, updateText] = useState("")
    const [todos, updateTodos] = useState([

    ])
    const handleClick = ()=>{

        const todoNew = {content : todoText}
        updateTodos([
            ...todos, todoNew
        ])
    }
    const handleChange = e=>{
        updateText(e.target.value)
    }
    return <div>
        <input type="text" placeholder="Write To Do" onChange = {handleChange} value = {todoText}/><br />
        <button onClick={handleClick}>ADD</button>
        <ul>
            {todos.map((todo, idx)=>{
                return <li key={idx}>{todo.content}</li>
            })}
        </ul>
    </div>
}
export default ToDoForm;
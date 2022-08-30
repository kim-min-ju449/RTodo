import {useState} from 'react';
import ToDo from './ToDo';

const ToDoList = (todos)=>{

    //     const [todos, updateTodos] = useState([
    //         // {
    //         //     content : "공부하기", id:888, didIt: false
    //         // }
    //    ])
    //     const [todoText, updateText] = useState("")
    //
    //     const handleClick = ()=>{
    //         // 스프레드 연산자(...)를 사용하는 게 베스트!
    //         const todoNew = {content : todoText}
    //
    //         updateTodos([
    //             ...todos, todoNew
    //
    //         ])
    //     }
    //
    //     const handleChange = (e) =>{
    //         updateText(e.target.value)
    // }
    //
    //     const toggleDidIt = (toggleId) =>{
    //         const result = todos.map((todo=>{
    //             return todo.id === toggleId ? {...todo, didIt: !todo.didIt} : todo
    //         }))
    //         updateTodos(result)
    // }
    return <div>
        {/*<input type="text" placeholder="Write To Do" onChange = {handleChange} value = {todoText} />*/}
        {/*<button onClick={handleClick}>ADD</button>*/}
        <ul>
            {todos.map((todo, idx) =>{
                return  <li key={idx}>
                    <ToDo props={todo}/>
                </li>
            })}
        </ul>
    </div>
}
export default ToDoList;

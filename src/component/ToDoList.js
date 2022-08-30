import {useState} from 'react';
import ToDo from './ToDo';

const ToDoList = ({todos, onToggle})=>{
    console.log(todos,'22')

    return (
        <div>

            {/*<input type="text" placeholder="Write To Do" onChange = {handleChange} value = {todoText} />*/}
            {/*<button onClick={handleClick}>ADD</button>*/}
            {/*<ul>*/}
                {
                    todos.map((todo, idx) => <ToDo todo={todo} onClick={onToggle}/>)
                }
            {/*</ul>*/}
        </div>
    )
}
export default ToDoList;

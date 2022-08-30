//
// import {useState} from 'react'
//
//
// const ToDoForm = ()=>{
//
//     const [todoText, updateText] = useState("")
//     const [todos, updateTodos] = useState([
//
//     ])
//     const handleClick = ()=>{
//
//         const todoNew = {content : todoText}
//         updateTodos([
//             ...todos, todoNew
//         ])
//     }
//     const handleChange = e=>{
//         updateText(e.target.value)
//     }
//     return <div>
//         <input type="text" placeholder="Write To Do" onChange = {handleChange} value = {todoText}/><br/>
//         <button onClick={handleClick}>ADD</button>
//         <ul>
//             {todos.map((todo, idx)=>{
//                 return <li key={idx}>{todo.content}</li>
//             })}
//         </ul>
//     </div>
// }
// export default ToDoForm;
import {useState, useCallback} from 'react';


const ToDoForm = ({onInsert}) =>{
    const [value, setValue] = useState('');

    const onChange = useCallback(e =>{
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e =>{
            onInsert(value);
            setValue('');

            e.preventDefault();
        },
        [onInsert, value],
    );


    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요"
                   value={value}
                   onChange={onChange}/>
            <button type="submit">
                Add
            </button>
        </form>
    );
};

export default ToDoForm;
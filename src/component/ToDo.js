import React, {useRef, useState} from 'react';
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

const Todo = (todo) =>{
    const didItStyle = {color:"gray", textDecoration: "line-through", cursor:"pointer"}
    const notYetStyle = {color:"black", textDecoration: "none", cursor:"pointer"}
    return(
        <div>
            {/*<span onClick = {()=> toggleDidIt(todo.id)} style={ todo.didIt ? didItStyle:notYetStyle }>{todo.content}</span>*/}
            <span>{todo.value}</span>


        </div>
    );
}
export default Todo;

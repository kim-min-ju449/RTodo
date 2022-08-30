import React, {useRef, useState} from 'react';

const Todo = ({todo}) =>{
    console.log(todo,'333')
    const didItStyle = {color:"gray", textDecoration: "line-through", cursor:"pointer"}
    const notYetStyle = {color:"black", textDecoration: "none", cursor:"pointer"}

    return(
        <div>
            <span onClick = {()=>(todo.id)} style={didItStyle}>{todo.task}</span>

            <span>{todo.task}</span>
        </div>
        // <div>
        //     <span style={todo.complete ? didItStyle : notYetStyle} >{todo.task}</span>
        // </div>
    );
}
export default Todo;

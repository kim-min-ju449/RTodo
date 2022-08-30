import ToDoForm from "./component/ToDoForm";
import './App.css';
import ToDoList from "./component/ToDoList";
import {useState, useRef, useCallback} from 'react';
import data from './data.json';


const App =()=>{
  const [todos, setTodos] = useState(data);

  console.log(data, todos,'----')

  const onInsert = useCallback(
      text =>{
        // const todo = {
        //   id: nextId.current,
        //   text,
        //   complete: true,
        // };
        // setTodos(todos.concat(todo));
        // nextId.current +=1;
      },
      [todos],
  );

  const onToggle = useCallback(
      (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, complete: !todo.complete}: {...todo},
            ),
        );
      },
      [todos],
  )
  return (
    <div>
      <ToDoForm onInsert={onInsert}/>
        <ToDoList todos={todos} onToggle={onToggle}/>
    </div>
  );
}

export default App;

import ToDoForm from "./component/ToDoForm";
import './App.css';
import ToDoList from "./component/ToDoList";
import ToDo from "./component/ToDo"
import {useState, useRef, useCallback} from 'react';


const App =()=>{
  const [todos, setTodos] = useState([

  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
      text =>{
        const todo = {
          id: nextId.current,
          text,
          checked: true,
        };
        setTodos(todos.concat(todo));
        nextId.current +=1;
      },
      [todos],
  );

  const onToggle = useCallback(
      id => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, checked: !todo.checked}: todo,
            ),
        );
      },
      [todos],
  )
  return (
    <div>
      <ToDoForm onInsert={onInsert}/>
        <ToDoList props={setTodos} onToggle={onToggle}/>
        <ToDo/>

    </div>
  );
}

export default App;

import React,{useState} from 'react'
import Todo from './Todo';
import { TodoForm } from './TodoForm'
export const TodoList = () => {
    const [todos,setTodos]=useState([]);
    const addTodos=(todo)=>{
        if(!todo.text || /^\s*$/.test(todo.text)){
        return;
        }
        const newTodo=[todo,...todos]
        setTodos(newTodo);
        
    }
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
    
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
      };
    const removeTodo=(id)=>{
        const updatedArr=[...todos].filter(todo=> todo.id!==id)
        setTodos(updatedArr);

    }
    const completeTodo=(id)=>{
        let updatesTodos=todos.map((todo)=>{
            if(todo.id === id){
                todo.isComplete=!todo.isComplete
            }
        });
        setTodos(updatesTodos);
    };
  return (
    <div>
      <h1>hello</h1>
      <TodoForm onSubmit={addTodos}/>
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  )
}

//export default TodoList

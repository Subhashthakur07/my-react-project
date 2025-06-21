import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
export default function TodoList(){
    let[todos,setTodos]=useState([{task:"sample task",id:uuidv4(),isDone:false}]);
    let[newTodo,setNewTodos]=useState("");
    let addNewTask=()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos,{task:newTodo,id:uuidv4(),isDone:false}];
        });
        setNewTodos("");
    }
    let updateTodoValue=(event)=>{
        setNewTodos(event.target.value);
    }
    let deleteTask=(id)=>{
        setTodos((prevTodos)=>
            prevTodos.filter((todo)=>todo.id!=id))
    }
    let updateAll=()=>{
        setTodos((prevTodos)=>prevTodos.map((todo)=>{return{...todo,task:todo.task.toUpperCase()}}))
}
    let updateTask=(id)=>{
         setTodos((prevTodos)=>
             prevTodos.map((todo)=>
            {
                if(todo.id==id)
                {
                    return {...todo,task:todo.task.toUpperCase()}
                }
                else
                {
                    return todo
                }
            _}))

        };
    let markAsDone=(id)=>{
     setTodos((prevTodos)=>
         prevTodos.map((todo)=>
         {
            if(todo.id==id)
                return {...todo,isDone:true}
            else
            return todo
         }));
        };
    let markAllDone=()=>{
        setTodos((prevTodos)=>
            prevTodos.map(todo=>{
                return {...todo,isDone:true}
            }          
            )
        )
    }

    return(
        <div>
            <input type="text" placeholder='enter your task' onChange={updateTodoValue} value={newTodo}/>
            <br />
            <br />
            <button onClick={addNewTask}>Add task</button>
            <br /><br /><br /><br /><br />
            <hr></hr>
            <h2>Tasks Todo</h2>
            <ul>
                {todos.map(todo=>
                <li key={todo.id}>
                <span style={todo.isDone?{textDecorationLine:"line-through"}:{}}>{todo.task}</span>
                <button onClick={()=>deleteTask(todo.id)}>delete</button>
                <button onClick={()=>updateTask(todo.id)}>updateTask</button>
                <button onClick={()=>markAsDone(todo.id)}>Mark as Done</button>
                </li>
                )}
            </ul>
            <br>
            </br>
            <button onClick={markAllDone}>Mark All Done</button>
            <button onClick={updateAll}>Uppercase All</button>
        </div>
    );
}
import React, { useReducer, useEffect } from 'react';
import './style.css';
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';



const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
    // return [{
    //     id: new Date().getTime(),
    //     desc:'Aprender React',
    //     done:false
    // }];
}

export const TodoApp = () => {

    const [todos,dispatch] = useReducer(todoReducer, [],init);

    

    useEffect(() =>{
        localStorage.setItem('todos',JSON.stringify(todos));
    },[todos]);

    const handleDelete = (todoId) =>{
        
        const action = {
            type:'delete',
            payload:todoId
        }

        dispatch(action);
    }
    //console.log(description);

    const handleToggle = (todoId) => {
        dispatch({
            type:'toggle',
            payload:todoId
        });
    }

    const handleAddTodo = (newTodo)=>{
        
        dispatch({
            type:'add',
            payload:newTodo
        });
    }

    return (
        <div>
            <h1>TodoApp { todos.length} </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    {/* Aqui va lo que corte */}
                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle} 
                    />
                </div>
                <div className="col-5">
                        <TodoAdd handleAddTodo={handleAddTodo} />
                </div>
            </div>
            
        </div>
    )
}

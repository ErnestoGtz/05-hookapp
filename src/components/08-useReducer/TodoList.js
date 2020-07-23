//import React, { useReducer } from 'react';
import React from 'react';
import { TodoListItem } from './TodoListItem';
//import { todoReducer } from './todoReducer';

export const TodoList = ({todos,handleDelete,handleToggle}) => {
    
    
    //const [todos,dispatch] = useReducer(todoReducer);
    
    return (
        <div>
            <ul className="list-group list-group-flush">
                {
                    todos.map( (todo,index) => (
                        <TodoListItem
                            key={todo.id}
                            todo={todo}
                            index={index}
                            handleDelete={handleDelete}
                            handleToggle={handleToggle} 
                        /> 
                    ))       
                }
            </ul>
        </div>
    )
}

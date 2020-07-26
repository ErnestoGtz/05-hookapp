import {todoReducer} from '../../components/08-useReducer/todoReducer';
import '@testing-library/jest-dom';
import { demoTodos } from '../fixtures/demoTodos';



    
describe('Pruebas en todoReducer', () => {
    test('debe de retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos,{});
        expect(state).toEqual(demoTodos);
    });
    test('debe agregar un TODO', () => {
        const newTodo = {
            id: 4,
            desc:'Aprender express',
            done:false
        };

        const action = {
            type:'add',
            payload:newTodo
        };
       const state = todoReducer(demoTodos,action);
       expect(state.length).toEqual(3); 
       expect(state).toEqual([...demoTodos,newTodo]);
    });

    test('debe de eliminar un TODO', () => {
        const action = {
            type:'delete',
            payload:1
        };

        const state = todoReducer(demoTodos,action);
        expect(state.length).toBe(1);
        expect(state).toEqual([ demoTodos[1] ]);
    });

    test('debe de hacer el Toggle del Todo', () => {
        const action = {
            type:'toggle',
            payload:1
        };

        const state = todoReducer(demoTodos,action);

        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1]);

        

    })
    
    
    
    
});

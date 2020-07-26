import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter';
import '@testing-library/jest-dom';

describe('Pruebas en useCounter', () => {
    test('debe de retornar valores por defecto', () => {
        const { result } = renderHook( () => useCounter(100));
        //console.log(result.current);
        // expect(typeof result.current.increment).toBe('function');
        // expect(typeof result.current.decrement).toBe('function');
        // expect(typeof result.current.reset).toBe('function');
        expect(result.current.counter).toBe(100);

    })

    test('debe de incrementar el counter en 1', () => {
        const {result} = renderHook(()=>useCounter(100));
        const {increment} = result.current;

        act(()=>{
            increment();
        });

        const {counter} = result.current;
        expect(counter).toBe(101);
    })
    
    test('debe de incrementar el decrementar en 1', () => {
        const {result} = renderHook(()=>useCounter(100));
        const {decrement} = result.current;

        act(()=>{
            decrement();
        });

        const {counter} = result.current;
        expect(counter).toBe(99);
    })

    test('debe de resetear el counter en 100', () => {
        const {result} = renderHook(()=>useCounter(100));
        const {increment,reset} = result.current;

        act(()=>{
            increment();
            reset();
        });

        const {counter} = result.current;
        expect(counter).toBe(100);
    })
    
})

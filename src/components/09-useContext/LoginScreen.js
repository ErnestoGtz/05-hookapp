import React,{useState,useContext} from 'react'
import { UserContext } from './UserContext';


export const LoginScreen = () => {
    
    const { setUser } = useContext(UserContext);
    
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button 
                className="btn btn-secondary"
                onClick={() => setUser({
                    id:'04131024',
                    name:'Ernesto Gtz'
                })}
            >
                Login
            </button>
        </div>
    )
}

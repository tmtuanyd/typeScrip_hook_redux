import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Store } from './store/type';
import {deleteTodo, toggleTodo, updateTodo} from "./store/action";

const TodoList = () => {
    const todos = useSelector((state: Store) => state.todos);
    const dispatch = useDispatch();
    return (
        <React.Fragment>
            {todos.map((todo: {id: number; text: string})=> (
                <>
                    <input
                        type="checkbox"
                        onClick={()=>dispatch(toggleTodo(todo.id))}/>
                    <input type="text"
                           value={todo.text}
                           onChange={(e) => dispatch(updateTodo(todo.id, e.target.value))}
                    />
                    <button
                        onClick={() => dispatch(deleteTodo(todo.id))}
                    >Delete</button>
                </>

            ))}
        </React.Fragment>
    );
};

export default TodoList;
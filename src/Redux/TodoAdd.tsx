import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Store} from "./store/type"
import {addTodo, setNewTodo} from "./store/action";

const TodoAdd = () => {
    const newTodo = useSelector((state: Store) => state.newTodo)
    const dispatch = useDispatch()
    return (
        <div>
            <input type="text" placeholder={"New to do"} value={newTodo}
                   onChange={(evt) => dispatch(setNewTodo(evt.target.value))}
            />
            <button
                onClick={()=>dispatch(addTodo())}
            >Add to do</button>
        </div>
    );
};

export default TodoAdd;
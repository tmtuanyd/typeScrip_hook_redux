import React from 'react';
import {useDispatch} from "react-redux";
import {getTodos} from "./store/action";

const Bar = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={()=> dispatch(getTodos( "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json"))}>
                Load
            </button>
        </div>
    );
};

export default Bar;
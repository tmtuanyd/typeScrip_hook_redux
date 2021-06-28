import React, {useEffect, useRef} from 'react';

const UseRefComponent = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    useEffect(()=>{
        if(inputRef && inputRef.current) inputRef.current.focus()
    },[])
    return (
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    );
};

export default UseRefComponent;
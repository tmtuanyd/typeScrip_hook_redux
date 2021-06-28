import React, {useEffect, useState} from 'react';

const UseEffectComponent = () => {
    const [val, valSet] = useState(1);
    useEffect(()=>{
        const timer = window.setInterval(()=>{
            valSet(prevState => prevState+1)
        }, 1000)
        return () => window.clearInterval(timer)
    }, [])
    return (
        <div>
            {val}
        </div>
    );
};

export default UseEffectComponent;
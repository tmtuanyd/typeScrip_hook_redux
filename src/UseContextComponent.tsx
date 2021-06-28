import React, {useContext, useState} from 'react';
import userContext, {initialState} from './store'

const ConsumerComponent = () => {
    const user = useContext<typeof initialState>(userContext)
    return (
        <div>
            <div>First: {user.first}</div>
            <div>Last: {user.last}</div>
        </div>
    )
}

const UseContextComponent = () => {
    const [user, userSet] = useState<typeof initialState>({
        first: 'Ahihi',
        last: 'Bhihi'
    })
    return (
        <div>
            <userContext.Provider value={user}>
                <ConsumerComponent/>
                <button onClick={()=>userSet({
                    first: 'Chidi',
                    last: 'Dhihi'
                })}>
                    ChangeContext
                </button>
            </userContext.Provider>
        </div>
    );
};

export default UseContextComponent;
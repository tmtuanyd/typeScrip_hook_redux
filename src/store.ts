import {createContext} from 'react'

export const initialState = {
    first: "Tuan",
    last: "Tran"
}

const userContext = createContext<typeof initialState>(initialState)

export default userContext
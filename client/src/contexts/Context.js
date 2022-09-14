import { createContext } from "react";

const Context = createContext({
    auth: localStorage.getItem('auth'),
    setAuth: () => { },
    user: JSON.parse(localStorage.getItem('user')),
    setUser: () => { }
})

export default Context;
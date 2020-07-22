import React from 'react'
import { useState, useEffect } from 'react'

import { auth } from '../firebase'

export const UserContext = React.createContext({ user: null })

 const UserProvider = (props) => {
     console.log("Inside provider");
    const [user, setUser] = useState({ user: null });

    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            console.log("-----------userAuth", userAuth);
            
            setUser({ user: userAuth })
            localStorage.setItem('isLoggedIn', true);
        })
    }, [])
    return (
        <>
            <UserContext.Provider value={user}>
                {props.children}
            </UserContext.Provider>
        </>
    )
}

export default UserProvider


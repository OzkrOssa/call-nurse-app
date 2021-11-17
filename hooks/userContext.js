import React from 'react'

const UserContext = React.createContext({})

export const UserProvider = ({children}) => {

    const [result, setResult] = React.useState(null)
    return (
        <UserContext.Provider value={[result, setResult]}>
            {children}
        </UserContext.Provider>
            
    )
}

export default function useUserContext(){
    return React.useContext(UserContext)
}

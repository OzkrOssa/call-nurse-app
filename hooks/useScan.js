import React from 'react'

const ScanContext = React.createContext({})

export const ScanProvider = ({children}) => {

    const [result, setResult] = React.useState(null)
    return (
        <ScanContext.Provider value={[result, setResult]}>
            {children}
        </ScanContext.Provider>
            
    )
}

export default function useScan(){
    return React.useContext(ScanContext)
}

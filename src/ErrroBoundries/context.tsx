import React, { createContext, useContext, useState } from 'react'

const ErrorContext = createContext({})

export const UserErrorBoundary = () => {
    return useContext(ErrorContext)
}

const Context = ({ children }: any) => {
    const [error, setError] = useState<string | null>()
    const [data, setData] = useState()

    const resetError = () => setError(null)
    return (
        <ErrorContext.Provider value={{ error, setError, resetError, setData, data }}>
            {children}
        </ErrorContext.Provider>
    )
}

export default Context

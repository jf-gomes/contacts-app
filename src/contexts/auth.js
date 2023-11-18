import React, { createContext, useState } from "react"

export const AuthContext = createContext({})

export default function AuthProvider({children}){

    const [contactInfo, setContactInfo] = useState([
        {
            id: 0,
            name: 'João Víctor Feitosa Gomes',
            phone: '69999465223',
            email: 'jf.gomes458@gmail.com'
        },
        {
            id: 1,
            name: 'Jhuline Gonzaga de Oliveira',
            phone: '69992996183',
            email: 'jhulineoliveira@gmail.com'
        }
    ])

    return (
        <AuthContext.Provider value={{contactInfo, setContactInfo}}>
            {children}
        </AuthContext.Provider>
    )
}
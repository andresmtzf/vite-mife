import { Dispatch, SetStateAction, createContext, useState } from 'react'

export const AuthContext = createContext<{
  auth: boolean
  setAuth: Dispatch<SetStateAction<boolean>>
}>({ auth: true, setAuth: () => {} })

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState(false)

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
}

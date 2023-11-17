import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthProvider'

function Logout() {
  const { setAuth } = useContext(AuthContext)
  useEffect(() => setAuth(false))
  return null
}

export default Logout

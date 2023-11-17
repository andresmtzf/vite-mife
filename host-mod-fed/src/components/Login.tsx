import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

function Login() {
  const { setAuth } = useContext(AuthContext)

  return (
    <div>
      <button onClick={() => setAuth(true)}>Iniciar Sesión</button>
      <i>{``}</i>
    </div>
  )
}

export default Login

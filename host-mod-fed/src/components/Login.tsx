import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

function Login() {
  const { setAuth } = useContext(AuthContext)

  return (
    <div>
      <button onClick={() => setAuth(true)}>Iniciar Sesión</button>
    </div>
  )
}

export default Login

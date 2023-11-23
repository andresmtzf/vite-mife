import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

function Login() {
  const { setAuth } = useContext(AuthContext)

  console.log(window._env_)

  return (
    <div>
      <button onClick={() => setAuth(true)}>Iniciar Sesión</button>
      <div>
        <i>{window?._env_.REMOTE}</i>
      </div>
    </div>
  )
}

export default Login

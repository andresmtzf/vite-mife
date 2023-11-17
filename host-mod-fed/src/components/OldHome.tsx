import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function OldHome() {
  const { auth } = useAuth()
  return (
    <div>
      <h1>Inicio</h1>
      <p>
        {auth ? (
          <Link to='/privado'>Sección privada</Link>
        ) : (
          <Link to='/login'>Iniciar sesión</Link>
        )}
      </p>
    </div>
  )
}

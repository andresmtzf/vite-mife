import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

export const BaseAuth = () => {
  const { auth, setAuth } = useContext(AuthContext)
  return (
    <>
      {auth ? (
        <>
          <h1>Usuario autenticado</h1>
          <button onClick={() => setAuth(false)}>Cerrar Sesión</button>
        </>
      ) : (
        <>
          <h1>Usuario no autenticado</h1>
          <button onClick={() => setAuth(true)}>Iniciar Sesión</button>
        </>
      )}
    </>
  )
}

import { Suspense, useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { AuthContext } from '../context/AuthProvider'

export const PrivateRoute = () => {
  const { auth } = useContext(AuthContext)

  if (!auth) {
    return <Navigate to={'/'} />
  }

  return (
    <div>
      <Header></Header>
      <Suspense
        fallback={
          <p>
            <i>Cargando...</i>
          </p>
        }>
        <Outlet />
      </Suspense>
    </div>
  )
}

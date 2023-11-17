import { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function PublicRoute() {
  const { auth } = useAuth()

  if (auth) {
    return <Navigate to='/home' />
  }

  return (
    <div>
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

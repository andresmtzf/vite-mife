import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.scss'
import { ErrorDisplay } from './components/ErrorDisplay'
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import RemoteComponent from './components/Remotecomponent'
import { AuthProvider } from './context/AuthProvider'
import { PrivateRoute } from './routing/PrivateRoute'
import PublicRoute from './routing/PublicRute'

const router = createBrowserRouter([
  {
    path: '/*',
    element: <PublicRoute />,
    errorElement: <ErrorDisplay />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: 'public-remote/*',
        element: <RemoteComponent />,
        errorElement: <h2>Ooops! Algo salió mal</h2>,
      },
    ],
  },
  {
    path: '/*',
    element: <PrivateRoute />,
    children: [
      {
        path: 'home',
        index: true,
        element: <Home />,
      },
      {
        path: 'logout',
        element: <Logout />,
      },
      {
        path: 'private-remote/*',
        element: <RemoteComponent />,
        errorElement: <h2>Ooops! Algo salió mal</h2>,
      },
    ],
  },
])

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  )
}

export default App

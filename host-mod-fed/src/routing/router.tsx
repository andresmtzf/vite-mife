import { createBrowserRouter } from 'react-router-dom'
import { ErrorDisplay } from '../components/ErrorDisplay'
import Home from '../components/Home'
import Login from '../components/Login'
import Logout from '../components/Logout'
import RemoteComponent from '../components/Remotecomponent'
import { PrivateRoute } from './PrivateRoute'
import PublicRoute from './PublicRute'

export const router = createBrowserRouter([
  {
    path: '/*',
    element: <PublicRoute />,
    errorElement: <ErrorDisplay />,
    children: [
      /* {
        index: true,
        element: <Home />,
      }, */
      {
        index: true,
        /* path: '/login', */
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

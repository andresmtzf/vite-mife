import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import './Header.scss'

export const Header = () => {
  const { setAuth } = useContext(AuthContext)

  return (
    <div className='header'>
      <div style={{ fontSize: '25px', fontWeight: 'bold', textAlign: 'center', float: 'left' }}>
        Header
      </div>
      <div className='header-right'>
        <button onClick={() => setAuth(false)} style={{ marginRight: '4px' }}>
          Cerrar Sesion
        </button>
        <NavLink to='/home'>
          <button>Home</button>
        </NavLink>
      </div>
    </div>
  )
}

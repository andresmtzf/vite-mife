//import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Home() {
  //const { setAuth } = useContext(AuthContext)

  return (
    <div
      style={{
        padding: '2rem',
        textAlign: 'center',
        placeItems: 'center',
        minWidth: '320px',
        minHeight: '50vh',
      }}>
      Ruta privada
      <div>HOME</div>
      {/* <div style={{ marginBottom: '4px', marginTop: '4px' }}>
        <button onClick={() => setAuth(false)}>Cerrar Sesion</button>
      </div> */}
      <div style={{ marginBottom: '4px', marginTop: '4px' }}>
        <NavLink to='/private-remote'>
          <button>Ir a componente remoto</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Home

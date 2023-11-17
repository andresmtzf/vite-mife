import './Header.css'

export const Header = () => {
  return (
    <div className='header'>
      <div style={{ fontSize: '25px', fontWeight: 'bold', textAlign: 'center', float: 'left' }}>
        CompanyLogo
      </div>
      <div className='header-right'>
        <button>Home</button>
      </div>
    </div>
  )
}

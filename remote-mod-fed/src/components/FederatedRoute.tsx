import { Route, Routes } from 'react-router-dom'
import FederatedComponent from './FederatedComponent'

const FederatedRoute = () => {
  return (
    <Routes>
      <Route index element={<FederatedComponent />} />
    </Routes>
  )
}

export default FederatedRoute

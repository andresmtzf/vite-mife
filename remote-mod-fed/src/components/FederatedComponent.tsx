import { useState } from 'react'

const FederatedComponent = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Remoto</h1>
        <div className='card'>
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        </div>
      </div>
    </>
  )
}

export default FederatedComponent

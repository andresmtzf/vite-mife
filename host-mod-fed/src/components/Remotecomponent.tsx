import { lazy } from 'react'

const RemoteComponent = lazy(() =>
  // @ts-ignore
  import('remoteComponent/FederatedComponent').catch(() => {
    return { default: () => <div className='h-home'>¡Página remota no disponible!</div> }
  })
)

export default RemoteComponent

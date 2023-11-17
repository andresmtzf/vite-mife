import { useRouteError } from 'react-router-dom'

export const ErrorDisplay = () => {
  const error: any = useRouteError()
  console.error(error)

  return (
    <>
      <div className='text-center'>
        <h1>Ooops!</h1>
        <p>Lo siento, ha ocurrido un error</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  )
}

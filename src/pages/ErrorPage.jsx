import {NavLink, useRouteError } from "react-router-dom"

export const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)

  return (
    <div>
      <h1>Oops! An error occured.</h1>

      {/* if error is present then in paragraph tag show error data */}
      {error && <p>{error.data}</p>}
      <NavLink to="/">
        <button>Go Home</button>
      </NavLink>
    </div>
  )
}
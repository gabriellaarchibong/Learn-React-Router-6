import {redirect} from "react-router-dom";

export async function authenticate(request) {
  const isLoggedIn = localStorage.getItem("loggedIn");
   const url = new URL(request.url)
   const pathname = url.pathname
   
  if (!isLoggedIn) {
    const response = redirect(`/login?message=you must log in first.&redirectTo=${pathname}`)
    response.body = true;
    return response
  }
  return null
}

//\Login.jsx

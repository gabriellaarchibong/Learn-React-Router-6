import { useLoaderData, useNavigation, Form, redirect } from "react-router-dom";
import styles from "./Login.module.css";
// import { useState } from "react";
import { loginUser } from "./useApi";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
  //  new URL(request.url).searchParams.get('message')
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const data = await loginUser({email, password} );
  console.log(data);
  // const userInfo = data.user
  localStorage.setItem("loggedIn", true);
  
  const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"
  if (data) {
    const response = redirect(pathname);
    response.body = true;
    return response;
  }
  return null;
}
function Login() {

  const message = useLoaderData();
  const navigation = useNavigation();
  // const navigate = useNavigate();
  // console.log(message);

  // function handleSubmit(e) {
  //     e.preventDefault();
  //     setSubmit("submitting")
  //     setError(null)
  //     loginUser(loginFormData)
  //     .then(data => console.log(data))
  //     .catch(err => setError(err))
  //     .finally(() => setSubmit("idle"))
  // }

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setLoginFormData((prev) => ({ ...prev, [name]: value }));
  // }
  // 

  function fakeLogOut() {
    localStorage.removeItem("loggedIn")
}


  return (
    <div className={styles.formContainer}>
      <h1>Login to your account</h1>
      {message && <h2 style={{ color: "red" }}>{message}</h2>}
      {/* {error && <h2 style={{ color: "red" }}>{error.message}</h2>}  */}
      {/* the 'replace' keyword is used to manipulate the browser history stack
      meaning if the user clicks the back button it is able to go back to the prev page the user was before being redirected to log in first */}
      <Form method="post" className={styles.form} replace>
        <input
          className={styles.formInput}
          type="email"
          name="email"
          id="email"
          // onChange={handleChange}
          placeholder="email address"
          // value={loginFormData.email}
        />
        <input
          className={styles.formInput}
          type="password"
          name="password"
          id="password"
          // onChange={handleChange}
          placeholder="password"
          // value={loginFormData.password}
        />
        <button className={styles.submitBtn} disabled = {navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "loggin in..." : "log in"}
        </button>
      </Form>
      <p style={{fontWeight: "600"}}>{`Don't have an account?`} <span style={{color: "#ff8c38"}}>Creat one now</span></p>
      <button onClick={fakeLogOut}>log out</button>
    </div>
  );
}

export default Login;

import styles from "./Login.module.css"

function Login() {
  return (
    <div className={styles.formContainer}>
        <h1>Login to your account</h1>
        <form action="" className={styles.form}>
          <input className={styles.formInput} type="email" name="email" id="email" placeholder="email" /> 
          <input className={styles.formInput} type="password" name="password" id="password" placeholder="password" />
          <button className={styles.submitBtn}>Log in</button>
        </form>
        <p></p>
    </div>
  )
}

export default Login
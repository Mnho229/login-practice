import Layout from './components/Layout'

const Login = (props) => {

  return (
    <Layout>
      <section className="l-container">
        <div className="c-login">
          <div className="c-login__input">
            <label for="Username" className="c-login__label">Username</label>
            <input 
              name="Username" 
              label="Username" 
              className="c-login__field" />
          </div>
          <div className="c-login__input">
            <label for="Password" className="c-login__label">Password</label>
            <input 
              name="Password" 
              type="password"
              label="Password" 
              className="c-login__field" />
          </div>

          <input className="c-login__submit" type="submit" value="Login" />
        </div>
      </section>

      {style()}
    </Layout>
  )

};

function style() {
  return (
    <style jsx="true">{`
      .l-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50vh;
      }

      .c-login {
        padding: 2rem;
        border: 1px solid lightgray;
      }

      .c-login__input {
        display:flex;
        flex-direction: column;
        margin-bottom: 1rem;
        width: 25rem;
      }

      .c-login__label {
        font-size: 1.2rem;
        margin-bottom: 0.2rem;
        color: #262335;
      }

      .c-login__field {
        width: 100%;
        font-size: 1.2rem;
        outline: 0;
        padding: 0.25rem;
      }

      .c-login__submit {
        width: 25rem;
        border: 0;
        border-radius: 0;
        padding: 0.5rem;
        font-size: 1.2rem;
        color: white;
        background-color: var(--main-color);
        margin-top: 1rem;
      }
    
    `}</style>
  )
}

export default Login;
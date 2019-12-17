import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
import Layout from './components/Layout';
import {useState} from 'react';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const makeHandleChange = (fn) => (event) => {
    fn(event.target.value);
  }
  const userHC = makeHandleChange(setUsername);
  const passHC = makeHandleChange(setPassword);

  const onSubmit = async (event) => {
    //Prevent progagating up
    event.preventDefault();
    
    //make URL
    const {APP_URL} = publicRuntimeConfig;
    const url = `${APP_URL}/api/login`;

    //Try fetch block (Incomplete)
    try {
      const response = await fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        },
        body: JSON.stringify({ username, password })
      })
    }
  }

  return (
    <Layout>
      <p>Username: {username}</p>
      <p>Password: {password}</p>
      <section className="l-container">
        <form onSubmit={onSubmit}>
          <div className="c-login">
            <h2 className="c-login__header">Account Login</h2>
            <div className="c-login__input">
              <label htmlFor="Username" className="c-login__label">Username</label>
              <input 
                name="Username" 
                label="Username" 
                className="c-login__field"
                onChange={userHC} />
            </div>
            <div className="c-login__input">
              <label htmlFor="Password" className="c-login__label">Password</label>
              <input 
                name="Password" 
                type="password"
                label="Password" 
                className="c-login__field"
                onChange={passHC} />
            </div>

            <input className="c-login__submit" type="submit" value="Login" />
          </div>
        </form>
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

      .c-login__header {
        text-align: center;
        margin-top: 0;
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
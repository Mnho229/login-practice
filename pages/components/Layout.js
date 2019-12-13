import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => {

  return (
    <>
      <Head>
        <title>Login Practice</title>
      </Head>
      <Navbar />
      {props.children}

      {style()}
    </>
  )

};

function style() {
  return (
    <style jsx="true" global="true">{`
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-family: sans-serif;
      }

      :root {
        --main-color: #f67280;
        --sec-color: #35477d;
        --tert1-color: #c06c84;
        --tert2-color: #6c5b7b;
      }
      
    `}</style>
  )
}

export default Layout;
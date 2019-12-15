import Link from 'next/link';

const Navbar = (props) => {

  return (
    <nav className="c-nav">
      <h2 className="c-nav__header">Login Practice</h2>
      <ul className="c-nav__buttonList">
        <li className="c-nav__button"><Link href="/"><a>Home</a></Link></li>
        <li className="c-nav__button"><Link href="/login"><a>Login</a></Link></li>
      </ul>

      {style()}
    </nav>
  )

};

function style() {
  return (
    <style jsx="true">{`
      .c-nav {
        width: 100%;
        background-color: var(--sec-color);
        color: white;
        height: 4rem;
        display: flex;
        margin: 0;

      }

      .c-nav__header {
        margin: 0;
        margin-left: 1rem;
        align-self: center;
      }

      .c-nav__buttonList {
        margin: 0 1rem 0 auto;
        list-style: none;
        display: flex;
        height: 100%;
        padding: 0;
      }

      .c-nav__button {
        width: 5rem;
        align-self: center;
      }

      .c-nav__button a {
        color: white;
        font-size: 1.2rem;
        text-decoration: none;
      }
    `}</style>
  )
}

export default Navbar;
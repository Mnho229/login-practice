
const Navbar = (props) => {

  return (
    <nav className="c-nav">
      <h2 className="c-nav__header">Login Practice</h2>
      <ul className="c-nav__buttonList">
        <li className="c-nav__button">Home</li>
        <li className="c-nav__button">Login</li>
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
        font-family: sans-serif;
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
        width: 4rem;
        align-self: center;
        cursor: pointer;
      }
    `}</style>
  )
}

export default Navbar;
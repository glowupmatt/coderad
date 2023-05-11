import "./styles/App.css";
import "./styles/default.css";
import "./styles/styles.css";

function App() {
  return (
    <body>
      <div className="header-container">
        <nav className="navbar nav">
          <div className="container">
            <button
              className="navbar-toggler"
              aria-expanded="false"
              aria-controls="navbarDropdown"
            >
              <span>&#9776;</span>
            </button>
            <a className="navbar-brand" href="">
              CodeRAD
            </a>
            <ul className="navbar-nav">
              <li className="nav-link">
                <a href="#">Home</a>
              </li>
              <li className="nav-link">
                <a href="#">Blog</a>
              </li>
              <li className="nav-link">
                <a href="#">Portfolio</a>
              </li>
              <li className="nav-link">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <header className="bg-header">
          <div className="container">
            <div>
              <h2 className="hero-header">
                Young in our spirits and <br /> modern look.
              </h2>
              <a className="btn btn-white" href="#">
                Learn More
              </a>
            </div>
          </div>
        </header>
      </div>
    </body>
  );
}

export default App;

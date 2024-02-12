


function App() {
  return (
<>
  <nav className="navbar navbar-expand-lg bg-body-tertiary" id="nav">
    <div className="container-fluid">
      <img
        id="logo"
        className="navbar-brand"
        src="m029t0047_b_fashion_sale_18may23 1.png"
      />
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="html">
              about
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              contact
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              register{" "}
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  login
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  signup
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/*------------------haeddaer----------------------------*/}
  <section id="hero" className=" text-light text-center ">
    <div className="container">
      <div className="d-flex">
        <div id="text">
          <h1>lerm boostrap</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetum ipsum dolor, sit amet
            consectetum ipsum dolor, sit amet consectetum ipsum dolor, sit amet
            consectetur adipisicing elit. Cum, ducimus.
          </p>
          <button className="btn btn-dark">Facebook</button>
          <button className="btn btn-light">instagram</button>
        </div>
        <img className="img-fluid w-50" id="img" src="header.png" alt="" />
      </div>
    </div>
  </section>
  <div className="container">
    <div className="row">
      <div id="pack1" className="col-lg-4 col-md-4">
        <div id="col-text1">
          pack silver
          <span id="prix1">200DNT</span>
        </div>
        <div id="skils">
          <h3>photographe</h3>
          <h3>designer</h3>
          <h3>video</h3>
          <h3>montage</h3>
          <h3>site web</h3>
        </div>
        <button id="btn-pack1" className="btn btn-light">
          Facebook
        </button>
      </div>
      <div id="pack2" className="col-lg-4 col-md-4">
        <div id="col-text2">pack dyamon </div>
        <span id="prix2">400DNT</span>
        <div id="skils2">
          <h3>photographe</h3>
          <h3>designer</h3>
          <h3>video</h3>
          <h3>montage</h3>
          <h3>site web</h3>
        </div>
        <button id="btn-pack2" className="btn btn-dark">
          Facebook
        </button>
      </div>
      <div id="pack3" className="col-lg-4 col-md-4">
        <div id="col-text3">pack bronze</div>
        <span id="prix3">300DNT</span>
        <div id="skils">
          <h3>photographe</h3>
          <h3>designer</h3>
          <h3>video</h3>
          <h3>montage</h3>
          <h3>site web</h3>
        </div>
        <button id="btn-pack3" className="btn btn-light">
          Facebook
        </button>
      </div>
    </div>
  </div>
</>

  );
}

export default App;

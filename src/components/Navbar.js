
function Navbar() {
    return <nav className="navbar navbar-expand-lg custom_nav-container ">
    <a className="navbar-brand" href="index.html">
      <span>
        SYRY STOCK 
      </span>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className=""></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  ">
        <li className="nav-item active">
          <a className="nav-link" href="app1/html/index.html">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#shop">
            Shop
          </a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#clients">
            Testimonial
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact Us</a>
        </li>
      </ul>
      <div className="user_option">
        <a href="./components/login">
          <span>
            Login
          </span>
        </a>
        <a href="">
          <i className="fa fa-shopping-bag" aria-hidden="true"></i>
        </a>
        <form className="form-inline ">
          <button className="btn nav_search-btn" type="submit">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </div>
  </nav>;
 
    }
    export default Navbar;
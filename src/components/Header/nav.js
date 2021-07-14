import React from 'react';


const Nav = props => {
  return (
  
    <nav className="navbar navbar-expand-lg">
    <div className="container">

 
    <a className="logo" href="#">
        <img src="img/logo-light.png" alt="logo"/>          
    </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="icon-bar"><i className="fas fa-bars"></i></span>
      </button>

   
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <span className="nav-link"> Home <i className="fas fa-angle-down"></i></span>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                  <a href="main.html">Main Home</a>
              </li>
              <li className="dropdown-item">
                  <a href="index2.html">Creative Agency</a>
              </li>
              <li className="dropdown-item">
                  <a href="index1.html">Business Agency</a>
              </li>
              <li className="dropdown-item">
                  <a href="index-portfolio.html">Creative Portfolio <em>New</em></a>
              </li>
              <li className="dropdown-item">
                <span>One Page <i className="fas fa-angle-right"></i></span>

                <ul className="sub-menu">
                  <li className="dropdown-item">
                      <a href="main-onepage.html">Main Home</a>
                  </li>
                  <li className="dropdown-item">
                      <a href="index2-onepage.html">Creative Agency</a>
                  </li>
                  <li className="dropdown-item">
                      <a href="index1-onepage.html">Business Agency</a>
                  </li>
                  <li className="dropdown-item">
                      <a href="personal.html">Personal Demo</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="about-us1.html">About</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="services1.html">Services</a>
          </li>

          <li className="nav-item dropdown">
            <span className="nav-link"> Portfolio <i className="fas fa-angle-down"></i></span>
            <div className="mega-menu">
                <ul className="dropdown-menu">
                  <span className="dropdown-title">Grid Wild</span>
                  <li className="dropdown-item">
                      <a href="portfolio-wild-2.html">Two Column</a>
                  </li>
                  <li className="dropdown-item">
                      <a href="portfolio-wild-3.html">Three Column</a>
                  </li>
                  <li className="dropdown-item">
                      <a href="portfolio-wild-4.html">Four Column</a>
                  </li>
                </ul>
                <ul className="dropdown-menu">
                  <span className="dropdown-title">Grid With Gutter</span>
                  <li className="dropdown-item">
                      <a href="portfolio-2.html">Two Column</a>
                  </li>
                  <li className="dropdown-item">
                      <a href="portfolio-3.html">Three Column</a>
                  </li>
                  <li className="dropdown-item">
                      <a href="portfolio-4.html">Four Column</a>
                  </li>
                </ul>
                <ul className="dropdown-menu">
                  <span className="dropdown-title">Masonery Wild</span>  
                  <li className="dropdown-item">
                      <a href="portfolio-wild-masonery-2.html">Two Column</a>
                  </li>
                  <li className="dropdown-item">
                      <a href="portfolio-wild-masonery-3.html">Three Column</a>
                  </li>
                  <li className="dropdown-item">
                      <a href="portfolio-wild-masonery-4.html">Four Column</a>
                  </li>
                </ul>
                <ul className="dropdown-menu">
                  <span className="dropdown-title">Masonery With Gutter</span>  
                  <li className="dropdown-item">
                      <a href="portfolio-masonery-2.html">Two Column</a>
                  </li>
                  <li className="dropdown-item">
                      <a href="portfolio-masonery-3.html">Three Column</a>
                  </li>
                  <li className="dropdown-item">
                      <a href="portfolio-masonery-4.html">Four Column</a>
                  </li>
                </ul>
            </div>
          </li>

          <li className="nav-item dropdown">
            <span className="nav-link"> Blog <i className="fas fa-angle-down"></i></span>
            <ul className="dropdown-menu last">
              <li className="dropdown-item">
                <a href="blog.html">Blog Standard</a>
              </li>
              <li className="dropdown-item">
                <a href="blog-grid.html">Blog Grid</a>
              </li>
              <li className="dropdown-item">
                <a href=" blog-masonry.html">Blog Masonry</a>
              </li>
              <li className="dropdown-item">
                <a href="blog-single.html">Single Post</a>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <span className="nav-link"> Pages <i className="fas fa-angle-down"></i></span>
            <ul className="dropdown-menu last">
              <li className="dropdown-item">
                <a href="404.html">Error 404</a>
              </li>
              <li className="dropdown-item">
                <a href="comming-soon.html">Comming Soon</a>
              </li>
              <li className="dropdown-item">
                <a href="faq.html">FAQ</a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="contact1.html">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="register">Register</a>
          </li>
        </ul>
      </div>
    </div>
</nav>
  );
}

export default Nav;
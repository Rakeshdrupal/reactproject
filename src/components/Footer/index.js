import React from 'react';
import './styles.scss';

const Footer = props => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
            
            <div className="col-lg-4">
                <div className="info mb-md50">
           
                    <a className="logo" href="#">
                        <img src="img/logo-light.png" alt="logo" />
                    </a>
                    <h6>Creative <i>HTML5</i> Multipages Template.</h6>
                    <p>We are a passionate digital design agency that specializes in beautiful and easy-to-use digital design & web development services.</p>
                    <div className="social">
                        <span>Social : </span>
                        <a href="#0" className="icon">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#0" className="icon">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#0" className="icon">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#0" className="icon">
                            <i className="fab fa-behance"></i>
                        </a>
                        <a href="#0" className="icon">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="las-post mb-md50">
                    <div className="title">
                        <h5>Recent Postes</h5>
                    </div>
                    <div className="item mb-15">
                        <a href="#0">
                            <div className="thum">
                                <img src="img/blog/thum/1.jpg" alt=""/>
                            </div>
                            <div className="cont">
                                <h6>48 Best WordPress Themes</h6>
                                <p>6 August 2018 <span>By </span> Admin</p>
                            </div>
                        </a>
                    </div>
                    <div className="item mb-15">
                        <a href="#0">
                            <div className="thum">
                                <img src="img/blog/thum/2.jpg" alt=""/>
                            </div>
                            <div className="cont">
                                <h6>Business Strategy Consule</h6>
                                <p>6 August 2018 <span>By </span> Admin</p>
                            </div>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#0">
                            <div className="thum">
                                <img src="img/blog/thum/3.jpg" alt=""/>
                            </div>
                            <div className="cont">
                                <h6>Obsession with all things</h6>
                                <p>6 August 2018 <span>By </span> Admin</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="tags">
                    <div className="title">
                        <h5>Tag Cloud</h5>
                    </div>
                    <span><a href="#0">Blog</a></span>
                    <span><a href="#0">Magazine</a></span>
                    <span><a href="#0">Link</a></span>
                    <span><a href="#0">Example</a></span>
                    <span><a href="#0">Muli</a></span>
                    <span><a href="#0">Video</a></span>
                    <span><a href="#0">Gallery</a></span>
                    <span><a href="#0">Quote</a></span>
                </div>
            </div>

        </div>
    </div>

    <div className="sub-footer text-center">
        <p>&copy; 2018 <b>UI-ThemeZ</b>. All Rights Reserved.</p>
    </div>
</footer>
  );
}

export default Footer;
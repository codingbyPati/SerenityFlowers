import * as React from 'react';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { AnchorLink } from 'gatsby-plugin-anchor-links';


const Footer = () =>{
    return(
        <React.Fragment>
            <section className="footer-bg">
                <div className="footer-grid">
                    <div className="contact-item">
                        <p>3743 834 383</p>
                        <p>sfgs@shf.com</p>
                        <p>address</p>
                        <div className="display-flex">
                            <div className="social-dots"></div>
                            <div className="social-dots"></div>
                        </div>
                        <div className="footer-bg2">
                                <AnchorLink
                                className="footer-links"
                                to="/"
                                >
                                Privacy
                                </AnchorLink >
                                <AnchorLink
                                className="footer-links"
                                to="/"
                                >
                                Help
                                </AnchorLink>
                                <AnchorLink
                                className="footer-links"
                                to="/"
                                >
                                Other
                                </AnchorLink>
                        </div>
                        
                    </div>

                    <Logo/>

                    <div >
                        <form method="post" action="#" className="form-item">
                           
                                <label>
                                    Name
                                </label>
                                <input type="text" name="name" id="name" />
                                <label>
                                    Email
                                </label>
                                <input type="text" name="name" id="name" />
                                <label for="msg">Message:</label>
                                <textarea id="msg" name="user_message" rows="5"></textarea>
                        

                        </form>
                        <div className="btn-form">
                            <Button type="light">SEND
                            </Button>
                        </div>
                       



                    </div>


                </div>
                <nav className="footer-nav">
                    <div className="links">
                        <AnchorLink
                        className="navbar-links"
                        to="/"
                        >
                        Home
                        </AnchorLink>
                        <AnchorLink
                        className="navbar-links"
                        to="/"
                        >
                        Flower Arrangment
                        </AnchorLink>
                        <AnchorLink
                        className="navbar-links"
                        to="/"
                        >
                        Testimonials
                        </AnchorLink>
                        <AnchorLink
                        className="navbar-links"
                        to="/"
                        >
                        Contact
                        </AnchorLink>



                    </div>

                </nav>
                <div className="footer-bottom">

                </div>
                    
          
            </section>

        </React.Fragment>
       
    )




}

export default Footer;

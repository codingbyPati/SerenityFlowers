import * as React from 'react';
import '../../src/styles.scss';
import MobileMenu from '../components/MobileMenu';
import mainImage from '../images/mainImage.jpg';
import Button from '../components/Button';
import Logo from '../components/Logo';
import menubutton from '../images/menubutton.svg';
import cancel from "../images/cancel.svg";

import {Link} from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { AnchorLink } from 'gatsby-plugin-anchor-links';``
import { useSpring, animated } from 'react-spring';
import {useState} from 'react';

const MainBackground = () => {
  const props = useSpring({ 
     to: { opacity: 1 },
     from: { opacity: 0 },
     delay: 1000,
    })
  const [menuActive, setMenuActive] = useState<boolean>(false)

  const toggleMenu = () => {
    setMenuActive(!menuActive);
 }
    /*
    const data = useStaticQuery(graphql`
    query MyQuery {
        allFile(filter: {name: {eq: "mainImage"}}) {
          edges {
            node {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
  `)
  
  const image = getImage(data.allFile.edges[0].node.childImageSharp.gatsbyImageData)
  */


    return (
        <React.Fragment>
        <section className="landing-page">
          <header>
            <div className="mainContainer" >
              <img className="backgroundImg" justify-content="center" src={mainImage} alt="mainImage" />
                <div className="radial-background"></div>
                  <div className="logo-box">
                    <div className="contact-info">
                      <span>653 363 3634</span>
                      <span>awesomeemail@gmail.com</span>
                    </div>
                    <Logo/>
                    <div className="social-media">
                      <Link to="">
                        <div className="social-dots">

                        </div>
                      </Link>  
                      <div className="social-dots">

                      </div>
                     
                    </div> 
                  </div>
                  <div className="mob-menu-background"></div>
                  <div onClick={toggleMenu}>
                      <img className="menu-btn" src={menuActive ? cancel : menubutton} />
                  
                  </div>
                  {menuActive && <MobileMenu/>  }
                   
                  <div className="navbar">
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
                  
                      

                    <div className="squareGradient grad-left">

                    </div>
                    <div className="squareGradient grad-right">

                    </div>
                    
                  </div>
                 
                  <div>
                      <animated.h1  className="title-bg" style={props}>Most beautiful flowers</animated.h1>
                  </div>
                  <div className="display-flex justify-content-center margin-top">
                    <Button type="dark">
                     Portfolio

                    </Button>
                  </div>
                  
            </div>
           
           

    
            
          </header>
         
            
           
        </section>
        </React.Fragment>
  
    )
  }

  export default MainBackground;
  

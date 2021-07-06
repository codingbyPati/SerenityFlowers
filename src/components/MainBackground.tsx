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
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { useSpring, animated } from 'react-spring';
import {useState} from 'react';
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"



const MainBackground = () => {
  const data = useStaticQuery(graphql`
  query backgroundQuery {
    allFile(filter: {name: {in: "mainImage"}}) {
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

  const props = useSpring({ 
     to: { opacity: 1 },
     from: { opacity: 0 },
     delay: 1000,
    })
  const [menuActive, setMenuActive] = useState<boolean>(false)
  const bgImage = convertToBgImage(data.allFile.edges[0].node.childImageSharp.gatsbyImageData);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
 }
    
 
  console.log(bgImage)


    return (
        <React.Fragment>
        <section className="landing-page" id="home">
          <header>
          <BackgroundImage
            Tag="section"
            // Spread bgImage into BackgroundImage:
            {...bgImage}
            preserveStackingContext
          >
            <div className="mainContainer">
           
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
                  <div className="mob-menu-background">
                   <div className="mob-menu-logo">Serenity Flowers</div> 
                  </div>
               
                  <div onClick={toggleMenu}>
                      <img className="menu-btn" src={menuActive ? cancel : menubutton} />
                  
                  </div>
                  {menuActive && <MobileMenu turnOffMenuFunc={toggleMenu} /> }
                   
                  <div className="navbar">
                    <AnchorLink
                    className="navbar-links"
                    to="/#home"
                    >
                    Home
                    </AnchorLink>
                    <AnchorLink
                    className="navbar-links"
                    to="#flower-arrangment"
                    >
                    Flower Arrangment
                    </AnchorLink>
                    <AnchorLink
                    className="navbar-links"
                    to="#testimonials"
                    >
                    Testimonials
                    </AnchorLink>
                    <AnchorLink
                    className="navbar-links"
                    to="#portfolio"
                    >
                    Portfolio
                    </AnchorLink>
                    <AnchorLink
                    className="navbar-links"
                    to="#contact"
                    >
                    Contact 
                  
                    </AnchorLink>

                    <div className="squareGradient grad-left">

                    </div>
                    <div className="squareGradient grad-right">

                    </div>
                    
                  </div>
                 
                  <div>
                      <animated.h1  className="title-bg" style={props}>MOST BEAUTIFUL FLOWERS</animated.h1>
                  </div>
                  <div className="display-flex justify-content-center margin-top">
                    <AnchorLink to="/#portfolio" className="text-decoration-none">
                        <Button type="dark">
                        Portfolio

                        </Button>
                    </AnchorLink>
                  
                  </div>
                  
            </div>
            </BackgroundImage>

            
          </header>
    
        </section>
        </React.Fragment>
  
    )
  }

  export default MainBackground;
  

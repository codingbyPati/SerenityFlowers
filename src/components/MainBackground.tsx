import * as React from 'react';
import '../../src/styles.scss';
import mainImage from '../images/mainImage.jpg';
import Button from '../components/Button'

import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { AnchorLink } from 'gatsby-plugin-anchor-links';


const MainBackground = () => {
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
                      <div className="logo">
                        <div className="pink-dot"></div>
                        <div style={{fontSize:"50px"}}>Serenity Flowers</div>
                        <div style={{color:"black", fontSize:"24px"}}>Flowers</div>
                      </div>
                      <div className="social-media">
                        <div className="social-dots"></div>
                        <div className="social-dots"></div>

                  
                      </div>
                  
                    </div>
  
                    
           

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
                  <div className="test">
                      <h1 className="title-bg">Most beautiful flowers</h1> 
                  </div>
                  <Button type="dark">Portfolio</Button>
            </div>
           
           

    
            
          </header>
         
            
           
        </section>
        </React.Fragment>
  
    )
  }

  export default MainBackground;
  

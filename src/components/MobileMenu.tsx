import { AnchorLink } from 'gatsby-plugin-anchor-links';
import * as React from 'react';


const MobileMenu  =() => {
    return(
        <div className="menuBg">
            <AnchorLink
            className="mobile-links"
            to="/"
            >
            Home
            </AnchorLink>
            <AnchorLink
            className="mobile-links"
            to="/"
            >
            Flower Arrangment
            </AnchorLink>
            <AnchorLink
            className="mobile-links"
            to="/"
            >
            Testimonials
            </AnchorLink>
            <AnchorLink
            className="mobile-links"
            to="/"
            >
            Contact 
        
            </AnchorLink>
        </div>

    )
        
      
}

export default MobileMenu;
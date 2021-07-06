import { AnchorLink } from 'gatsby-plugin-anchor-links';
import * as React from 'react';
import {useState} from 'react';

interface IMobileMenu {
    turnOffMenuFunc: any
}
const MobileMenu  =({turnOffMenuFunc}:IMobileMenu) => {
    return(
        <div className="menuBg">
            <AnchorLink
            onAnchorLinkClick={turnOffMenuFunc}
            className="mobile-links"
            to="#home"
            >
            Home
            </AnchorLink>
            <AnchorLink
            className="mobile-links"
            to="#flower-arrangment"
            >
            Flower Arrangment
            </AnchorLink>
            <AnchorLink
            className="mobile-links"
            to="#testimonials"
            >
            Testimonials
            </AnchorLink>
            <AnchorLink
            className="mobile-links"
            to="#portfolio"
            >
            Portfolio
            </AnchorLink>
            <AnchorLink
            className="mobile-links"
            to="#contact-form"
            >
            Contact 
        
            </AnchorLink>
        </div>

    )
        
      
}

export default MobileMenu;
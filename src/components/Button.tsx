import { AnchorLink } from 'gatsby-plugin-anchor-links';
import * as React from 'react';
import {PropsWithChildren} from 'react';
import flowerPink from '../images/flowerPink.svg';
import flowerWhite from '../images/flowerWhite.svg';



interface IButtonProps{
    type:string
}

const Button =(props:PropsWithChildren<IButtonProps>) =>{
    const {type, children} = props; 
    return(
        (type == 'dark') ?  
        <AnchorLink 
        className="button dark" to="/">
       
            <img className="flower-left"
            src={flowerWhite}/>
            {children}
            <img className="flower-right"
            src={flowerWhite}/>
       
        </AnchorLink> : 
      
              <AnchorLink 
                className="button light" to="/">
                <img className="flower-left"
                src={flowerPink}/>
                {children}
                <img className="flower-right"
                src={flowerPink}/>
              </AnchorLink>
       
    )
        
      
}

export default Button;
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import * as React from 'react';
import {PropsWithChildren} from 'react';


interface IButtonProps{
    type:string
}

const Button =(props:PropsWithChildren<IButtonProps>) =>{
    const {type, children} = props; 
    return(
         (type == 'dark') ?  
         <AnchorLink className="button dark" to="/">{children}</AnchorLink> : 
          <AnchorLink className="button light" to="/">{children}</AnchorLink>
    )
}

export default Button;
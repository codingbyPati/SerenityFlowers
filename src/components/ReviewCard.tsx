import * as React from 'react';

interface ICommentProps{
    image:any,
    review:string,
    author:string
}

const ReviewCard =(props:ICommentProps) =>{
    const {image,review,author} = props; 
    return(
        <div className="card-style">
                <img className="img-part" src={image}></img>
                    <div className="p-text-style">
                        <p>{review}</p>
                        <p>{author}</p>
                    </div>
         
                
                   
        </div>
    )
        
      
}

export default ReviewCard;
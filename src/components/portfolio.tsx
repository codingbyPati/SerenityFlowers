import * as React from 'react';
import portfolioSample from '../images/portfolioSample.jpg';
import portfolioImgData from "../data/portofolioImgData";


const Portfolio = () =>{
    return(
        <React.Fragment>
            <section className="portfolio-bg">
               <div className="title-bg" style={{color:"#DD6E89",textShadow:"0px 0px 15px rgba(0, 0, 0, 0.25)", position:"unset", paddingTop:"30px", paddingBottom:"30px"}}>PORTFOLIO</div>
               <div className="portfolio-grid-box">
                   <div className="page-width">
                        <div className="portfolio-grid">
                        {portfolioImgData.map(s => 
                                    <div className="portfolio-item-box">
                                        <img className="portfolio-item" src={s.image}></img>
                                    </div>
                                    )}
                        </div>
                    </div>
               </div>    
            </section>
        </React.Fragment>
       
    )




}

export default Portfolio;
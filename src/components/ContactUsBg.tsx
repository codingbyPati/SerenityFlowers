import * as React from 'react';
import '../../src/styles.css';
import Button from '../components/Button';
import ReviewCard from '../components/ReviewCard';
import section2 from '../images/section2.png';
import portfolioSample from '../images/portfolioSample.jpg';
import flowerReview from '../images/flowerReview.png';
import reviewCardData from "../data/reviewCardData";

const ContactUsBg = () =>{
    return(
        <React.Fragment>
            <section className="sectionBox dotted-bottom">
                
                <div className="linksBar">
                    <span >ANNIVERSARY</span>
                    <span> BIRTHDAY</span>
                    <span> WEDDINGS</span>
                    <span> FUNERALS</span>
                    <span> FESTIVALS</span>
                    <span> CHRISTMAS</span>
                    <span>THANKSGIVING</span>
                </div>
                <div className="lightPinkContainer">
                    <div className="center">
                        <h1 className="title-bgtwo">Most beautiful flowers</h1>
                        <p style={{fontSize:"18px", fontWeight:"600"}}>Donec lacinia lorem metus, eu euismod neque aliquam sagittis. In tempus nulla vel nisi aliquam tincidunt. Praesent a orci tincidunt, dignissim nunc a, ullamcorper nibh. Nullam nisl arcu, malesuada sed tortor id, placerat ullamcorper augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis et faucibus arcu. Proin id nisi dictum, maximus nisi quis, lobortis urna. Nam non purus in erat malesuada viverra euismod vitae mi.</p>
                        <div className="justify-content-center display-flex light-position">
                            <Button type="light" >
                            CONTACT US
                            </Button>
                        </div>
                   
                    
                    </div>
                   
                   
                </div>
                    
            </section>

            <section className="section-template">
                <div className="grid triple-grid z-50">
                    <div className="bg-blue"></div>
                    <div className="bg-grad"></div>
                 
                </div>
                <div className="grid double-grid-33-66 z-40">
                    <div></div>
                    <img className="image-style" src={section2} alt="Flowers image"></img>
                </div>
                <div className="page-width z-60">
                        <div className="grid double-grid-50-50" style={{maxWidth: "1140px"}}>
                            <div className="section-2-text">
                            <h2   style={{fontSize: "40px", color:"#DD6E89" , fontWeight:"bold"}}>LOREM IPSUM</h2>
                                <p>Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsum</p>
                            </div>
                        </div>
                </div>  
            </section>


            <section className="section-template">
                 <div className="grid triple-grid-v2 z-50">
                     <div></div>
                    <div className="bg-grad-v2"></div>
                    <div className="bg-blue"></div>                         
                 </div>
                 <div className="grid double-grid-66-33 z-40">
                    <img className="image-style" src={portfolioSample} alt="Flowers image"></img>
                 </div>
                 <div className="page-width">
                        <div className="grid double-grid-50-50 z-60" style={{maxWidth: "1140px"}}>
                            <div></div>
                            <div className="section-2-text">
                            <h2   style={{fontSize: "40px", color:"#DD6E89", fontWeight:"bold"}}>LOREM IPSUM</h2>
                                <p>Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsum</p>
                            </div>
                        </div>
                </div>
                 
            </section>

            <section className=" bg-style dotted-bottom dotted-top">
               
                    <h1 className="title-bgtwo">OUR CLIENTS</h1>
                    <div className="grid-container-reviews">
                        {reviewCardData.map(s => 
                            <ReviewCard key={s.id} image={s.image} review={s.review} author={s.author}></ReviewCard>
                            )}
                    </div>
               
                    
            </section>

        </React.Fragment>
       
    )




}

export default ContactUsBg;
import * as React from "react"
import MainBackground from "../components/MainBackground"
import ContactUsBg from "../components/ContactUsBg"
import Portfolio from "../components/Portfolio"
import Footer from "../components/Footer"
import '../../src/styles.css';
import SimpleReactLightbox from "simple-react-lightbox"

export default function IndexPage() {
  return (
      <React.Fragment>
        <SimpleReactLightbox>
          <MainBackground/>
          <ContactUsBg/>
          <Portfolio/>
          <Footer/>
        </SimpleReactLightbox>
    

      





      </React.Fragment>
  
      
     
  )
}
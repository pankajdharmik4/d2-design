import React from 'react'
import Hero from './pages/Hero'
import Bar from './pages/Bar'
import InvisalignBenefitsSection from './pages/WhyLove'
import HowItWorks from './pages/HowItWorks'
import BeforeAfterSection from './pages/BeforeAfter'
import FAQSection from './pages/FAQ'
import TestimonialsSection from './pages/TestimonialsSection'
import FormSection from './pages/ContactUs'
import Footer from './pages/Footer'
import AboutUs from './pages/AboutUs'
import Navbar from './pages/Navbar'
import Hero1 from './pages/Hero1'
import Hero2 from './pages/Hero2'
import HeroCarousel from './pages/HeroSection'

const App = () => {
  return (
 
    <>
        <Navbar/>
       {/* <Hero/> */}
       {/* <Hero1/> */}
       {/* <Hero2/> */}
       <HeroCarousel/>
       <Bar/>
       <BeforeAfterSection/>
       <AboutUs/>
       <InvisalignBenefitsSection/>
       {/* <HowItWorks/> */}
       <FAQSection/>
       <TestimonialsSection/>
       <FormSection/>
       <Footer/>
    </>
  )
}

export default App
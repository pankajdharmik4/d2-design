import React,{useState} from 'react'
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
import HeroCarousel from './pages/HeroSection'
import BookingModal from './pages/BookingModal'
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
 
    <>
        <Navbar/>
        <BookingModal isOpen={isModalOpen} onClose={closeModal} />

       {/* <Hero/> */}
       {/* <Hero1/> */}
       {/* <Hero2/> */}
       <HeroCarousel openModal={openModal}/>
       <Bar openModal={openModal}/>
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
import React from 'react'

import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import Footer from '../components/Footer'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'
// import WorkCard from "../components/WorkCard";



const Project = () => {
  return (
    <div>
     <Navbar/>
     <HeroImg2 heading="Projects" text="Some of my recent work are here"/>
     <Work/>
     <PricingCard/>
     <Footer/>
    </div>
  )
}

export default Project

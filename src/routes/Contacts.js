import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'
import HeroImg2 from '../components/HeroImg2'

const Contacts = () => {
  return (
    <div>
      <Navbar/>
      < HeroImg2 heading = "Contact" text="Let's have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contacts


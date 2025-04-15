import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from "../components/navbar/Navbar"
import HeroText from '../components/home-hero/HeroText'
import HeroButton from '../components/home-hero/HeroButton'
import SneakerBentoGallery from '../components/home-hero/SneakerBentoGallery'

const Home = () => {

  const navigate = useNavigate();

  const navigateToSign = () => {
    navigate("/signup");
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="background-pattern" />
      <Navbar />
      <HeroText />
      <HeroButton text="Visit Shop" onClick={navigateToSign}/>
      <SneakerBentoGallery />
    </div>


  )
}

export default Home
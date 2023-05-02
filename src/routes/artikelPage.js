import React from 'react'
import Navbar from '../components/navbar/navbar'
import ArtikelCard from '../pages/artikelCard';
import Footer from '../components/footer/footer'



const ArtikelPage = () => {
  return (
    <div>
      <Navbar/>
      <ArtikelCard/>
      <Footer/>
    </div>
  )
}

export default ArtikelPage

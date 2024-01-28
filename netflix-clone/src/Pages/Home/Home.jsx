import React from 'react'
import Header from '../../Componenets/Header/Header'
import Footer from '../../Componenets/Footer/Footer'
import Banner from '../../Componenets/Banner/Banner'; 
import RowList from "../../Componenets/Rows/RowList/RowList"
const Home = () => {
  return (
    <>
           <Header />
           <Banner />
           < RowList/>
           <Footer />
           
    </>
  )
}

export default Home
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {useParams} from  'react-router-dom'

function MovieDetails() {

    const {movieName}=useParams()

  return (
    <>
    <Navbar/>

    <h1 style={{color:"white"}}>{` you seached for ${movieName} movie`}</h1>

    <Footer/>
    </>
  )
}

export default MovieDetails
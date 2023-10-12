import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import EventCanvas from '../components/EventCanvas'


const Events = ({index}) => {
  return (
    <div>
      <Navbar />
      <EventCanvas />
    </div>
  )
}

export default Events